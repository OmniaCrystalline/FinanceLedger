/** @format */

import "./Blog.style.scss";
import blog from '../../images/home/blog.jpg'
import blog2 from '../../images/home/blog@2x.jpg'
import blogw from "../../images/home/blog.webp";
import blogw2 from "../../images/home/blog@2x.webp";

export const Blog = () => {
  return (
    <section className='container relative'>
      <span className='hidden' id='blog'></span>
      <div className='blog'>
        <div className='blog_img'>
          <picture className='about_image'>
            <source srcSet={`${blogw}, image.webp`} />
            <source srcSet={`${blogw2} 2x, image.webp`} type='image/webp' />
            <source srcSet={`${blog2} 2x, image.jpg `} type='image/jpeg' />
            <img src={blog} alt='book and coffee' />
          </picture>
        </div>
        <div className='blog_content'>
          <span className='blog_date'>April 16 2020</span>
          <h4 className='blog_post_h'>Blog Post One</h4>
          <p className='blog_p'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button className='btn blog_btn'>Read Our Blog</button>
        </div>
      </div>
    </section>
  );
};
