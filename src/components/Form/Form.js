/** @format */

import "./Form.style.scss";
import { useForm } from "react-hook-form";
import { ReactComponent as ErrSVG } from "../../images/form/worning.svg";
import j from "../../images/home/contact.jpg";
import j2 from "../../images/home/contact@2x.jpg";
import w from "../../images/home/contact.webp";
import w2 from "../../images/home/contact@2x.webp";

export const Callback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    fetch("/", {
      body: new FormData(data),
      method: "POST",
    })
      .then((res) => {
        reset()
        console.log("res.message", res.message);
      })
      .catch((err) => console.log("error.message", err.message));
  };

  return (
    <section className='container form_container relative'>
      <span className='hidden' id='contact'></span>
      <div className='form_image_container'>
        <picture className='form_image'>
          <source srcSet={`${w}, image.webp`} />
          <source srcSet={`${w2} 2x, image.webp`} type='image/webp' />
          <source srcSet={`${j2} 2x, image.jpg `} type='image/jpeg' />
          <img src={`${j}`} alt='contact' />
        </picture>
      </div>
      <div className='form_content'>
        <h4 className='form_h'>Request Callback</h4>
        <form
          className='form'
          method='POST'
          data-netlify='true'
          onSubmit={handleSubmit(onSubmit)}>
          <input
            className='form_input'
            placeholder='Enter your name'
            defaultValue=''
            {...register("name")}
          />
          <input
            className='form_input'
            placeholder='Enter email*'
            defaultValue=''
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className='error'>
              <ErrSVG /> This is a required field
            </span>
          )}
          <input
            type='submit'
            className='btn form_btn green_btn'
            value='Send'
          />
        </form>
      </div>
    </section>
  );
};
