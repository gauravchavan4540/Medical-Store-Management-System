package com.example.online.controller;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.online.entity.Attedance;
import com.example.online.entity.Cart;
import com.example.online.entity.MyOrders;
import com.example.online.entity.OrderProduct;
import com.example.online.entity.Product;
import com.example.online.repo.AttandanceRepo;
import com.example.online.repo.CartRepo;
import com.example.online.repo.MyOrdersRepo;
import com.example.online.repo.OrderProductRepo;
import com.example.online.repo.ProductRepo;


@RestController
@CrossOrigin//(origins = "http://localhost:4200")
@RequestMapping("employee")
public class EmployeeController {
	
	
	@Autowired
	AttandanceRepo attandanceRepo;
	
	@Autowired
	ProductRepo productRepo;

	@Autowired
	CartRepo cartRepo;
	
	@Autowired
	MyOrdersRepo myOrdersRepo;
	
	@Autowired
	OrderProductRepo orderProductRepo;
	
	@RequestMapping("attandanceMark{userid}")
	public Attedance att(@PathVariable int userid, @RequestBody String employeeName) {
		Attedance c = new Attedance();
		c.setDate(new Date());
		c.setEmployeeName(employeeName);
		c.setUserId(userid);
		return attandanceRepo.save(c);
	}
	//-----------------------------------------------------------
	
	
    @GetMapping("getAllproduct")
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

	
   // --------------------------------------------------------------------------------------------
	
//    add tocart to all product in bill 
    
	@RequestMapping("addToCart/{productid}/{userid}")
	public int addToCart(@PathVariable int productid, @PathVariable int userid) {
		try {
			int count = cartRepo.countByProductidAndUserid(productid, userid);
			if (count == 1)
				return 1;
			else if (count > 1)
				return 0;
			else {
				Cart cart = new Cart();
				cart.setProductid(productid);
				cart.setUserid(userid);
//				cart.setQuantity(quantity);
				cartRepo.save(cart);
				return 2;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return 0;// exception on server
		}
	}
    
    
    //----------------------------------------------------------
	
	
//	update the quantity on the product 
	
	
	  @PutMapping("/{id}/quantity")
	    public ResponseEntity<Cart> updateQuantity(@PathVariable int id, @RequestParam int quantity) {
	        // Find the Cart by ID
	        Cart cart = cartRepo.findById(id).orElseThrow(() -> new RuntimeException("Cart not found"));

	        // Update the quantity
	        cart.setQuantity(quantity);

	        // Save the updated Cart
	        Cart updatedCart = cartRepo.save(cart);

	        // Return the updated Cart
	        return ResponseEntity.ok(updatedCart);
	    }
    
    
    
    //------------------------------------------------------------------
	  
	  //getall product on the userid
	  
	  
		@RequestMapping("getCartProducts/{userid}")
		public List<Product> getCartProducts(@PathVariable int userid) {
			List<Cart> cartItems = cartRepo.findByUserid(userid);
			int count = cartRepo.countByUserid(userid);
			if (count == 0)
				return null;
			else {
				List<Integer> productIds = cartItems.stream().map(Cart::getProductid).collect(Collectors.toList());
				return productRepo.findAllById(productIds);
			}
		}

    
    
    
    
    
    
    
    
    
    
	@DeleteMapping("removeFromCart/{productid}/{userid}")
	public int removeFromCart(@PathVariable int productid, @PathVariable int userid) {
		try {
			List<Cart> cartItems = cartRepo.findByProductidAndUserid(productid, userid);
			if (!cartItems.isEmpty()) {
				cartRepo.delete(cartItems.get(0)); // Remove the first match (assuming unique product per user)
				return 1;
			} else {
				return 0;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}



	//------------------------------------------------------------------------------------------
	
	@PostMapping("placeOrder/{userid}")
	public int placeOrder(@PathVariable int userid, @RequestBody int[] cartIds) {
		try {
			MyOrders myOrders = new MyOrders();
			myOrders.setDate(new Date());
			myOrders.setUserid(userid);
			myOrders = myOrdersRepo.save(myOrders);

			double totalprice = 0;

			for (int cartId : cartIds) {
				Cart cart = cartRepo.findById(cartId).orElse(null);
				if (cart != null) {
					int productId = cart.getProductid();
					Product product = productRepo.findById(productId).orElse(null);

					if (product != null) {
						OrderProduct orderProduct = new OrderProduct();
						double price = product.getPrice();
						price -= (price * product.getDiscount() / 100);
						orderProduct.setPrice(price);
						totalprice += price;
						orderProduct.setDate(new Date());
						orderProduct.setName(myOrders.getName());
						orderProduct.setOrderid(myOrders.getId());
						orderProduct.setPrice(myOrders.getPrice());
						orderProduct.setProductid(productId);
						orderProductRepo.save(orderProduct);
					}
					// cartRepo.delete(cart);
				}
			}

			myOrders.setPrice(totalprice);
			myOrdersRepo.save(myOrders);
			cartRepo.deleteAll();

			return 1;
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	
	//-----------------------------------------------------------------------------------------
	
	

		@GetMapping("getBill/{id}")
		public MyOrders getbill(@PathVariable ("id") int id)
		{
			MyOrders bill=myOrdersRepo.findById(id).get();
			return bill;
		}

		
		
		//-----------------------------------------------------------------------------
		
		

	
	
}




