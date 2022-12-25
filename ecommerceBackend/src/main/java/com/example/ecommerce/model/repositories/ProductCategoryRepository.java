package com.example.ecommerce.model.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.ecommerce.model.entity.Product;
import com.example.ecommerce.model.entity.ProductCategory;
@RepositoryRestResource
@CrossOrigin("http://localhost:4200")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
	//public List<Product> findByCategoryId(long categoryId);
}
