import React , {useEffect}from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Carousel, Rate } from 'antd';
import { Link } from 'react-router-dom';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
      <symbol
        id="search"
        xmlns="http://www.w3.org/2000/symbolsvg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.21 10.21 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25"
          clipRule="evenodd"
        ></path>
      </symbol>
      <symbol id="user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339c-1.974 0-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
          clipRule="evenodd"
        ></path>
      </symbol>
      <symbol id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154c.298.23.594.459.885.688c.526.415.995.778 1.448 1.043c.452.264.816.385 1.126.385c.31 0 .674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043c.29-.23.587-.458.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382c.286.22.563.434.826.642c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399"
          clipRule="evenodd"
        ></path>
      </symbol>
      <symbol id="cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.249 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549c.303.149.437.27.525.398c.09.132.16.314.2.677c.04.38.041.875.041 1.615V9.76c0 1.453.014 2.5.151 3.3c.146.854.438 1.466.985 2.042c.594.627 1.346.9 2.243 1.026c.858.122 1.948.122 3.293.122h5.406c.742 0 1.366 0 1.87-.062c.537-.065 1.025-.209 1.452-.556c.426-.348.665-.797.837-1.309c.163-.482.289-1.093.439-1.82l.508-2.469l.002-.005l.01-.052c.165-.825.303-1.519.338-2.077c.036-.586-.031-1.164-.413-1.66c-.235-.306-.565-.479-.866-.584a4.617 4.617 0 0 0-1.002-.21c-.687-.076-1.522-.076-2.34-.076H5.667a5.932 5.932 0 0 0-.01-.108c-.054-.497-.17-.95-.453-1.362c-.284-.416-.662-.682-1.102-.899c-.412-.202-.936-.386-1.553-.603zm3.46 4.578h11.38c.856 0 1.61.001 2.205.067c.296.034.517.08.672.134a.56.56 0 0 1 .176.086c.062.082.128.23.102.651c-.027.444-.143 1.036-.321 1.926v.002l-.5 2.42c-.16.783-.27 1.303-.399 1.688c-.123.366-.239.523-.364.625c-.125.102-.303.184-.685.23c-.404.05-.935.051-1.734.051h-5.303c-1.417 0-2.4-.002-3.14-.107c-.716-.101-1.093-.285-1.366-.573c-.32-.338-.493-.668-.595-1.263c-.11-.65-.129-1.558-.129-3.047zM7.5 21.75a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m9.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0"
          clipRule="evenodd"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="alt-arrow-right-outline"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057"
          clipRule="evenodd"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="alt-arrow-left-outline"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081"
          clipRule="evenodd"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="cart-outline"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="quality"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"
        ></path>
        <path
          d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="price-tag"
        viewBox="0 0 16 16"
      >
        <path
          d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
        ></path>
        <path
          d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="shield-plus"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
        ></path>
        <path
          d="M8 4.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5a.5.5 0 0 1 .5-.5z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="star-fill"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="star-empty"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="star-half"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
        ></path>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="quote" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="facebook"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="youtube"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="twitter"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a110.93 110.93 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66Z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="instagram"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="linkedin"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="nav-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
        ></path>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 16 16">
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        ></path>
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="navbar-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
        ></path>
      </symbol>
    </svg>

    <div id="preloader" className="preloader-container hide-preloader">
      <div className="book">
        <div className="inner">
          <div className="left"></div>
          <div className="middle"></div>
          <div className="right"></div>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <div className="search-popup">
      <div className="search-popup-container">
        <form role="search" method="get" className="search-form" action="">
          <input
            type="search"
            id="search-form"
            className="search-field"
            placeholder="Type and press enter"
            value=""
            name="s"
          />
          <button type="submit" className="search-submit">
            <svg className="search">
              <use xlinkHref="#search"></use>
            </svg>
          </button>
        </form>

        <h5 className="cat-list-title">Browse Categories</h5>

        <ul className="cat-list">
          <li className="cat-list-item">
            <a href="#" title="Romance">Romance</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Thriller">Thriller</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Sci-fi">Sci-fi</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Cooking">Cooking</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Health">Health</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Lifestyle">Lifestyle</a>
          </li>
          <li className="cat-list-item">
            <a href="#" title="Fiction">Fiction</a>
          </li>
        </ul>
      </div>
    </div>

    <header id="header" className="site-header">
      <div className="top-info border-bottom d-none d-md-block">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-md-4">
              <p className="fs-6 my-2 text-center">
                Need any help? Call us <a href="#">112233344455</a>
              </p>
            </div>
            <div className="col-md-4 border-start border-end">
              <p className="fs-6 my-2 text-center">
                Summer sale discount off 60% off!
                <a className="text-decoration-underline" href="/"
                  >Shop Now</a
                >
              </p>
            </div>
            <div className="col-md-4">
              <p className="fs-6 my-2 text-center">
                2-3 business days delivery &amp; free returns
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav id="header-nav" className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand" href="/">
          <img src={'/src/assets/images/main-logo.png'} alt="Main Logo" className="logo img-fluid mb-2" />
          </a>
          <button
            className="navbar-toggler d-flex d-lg-none order-3 p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon"></use>
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="bdNavbar"
            aria-labelledby="bdNavbarOffcanvasLabel"
          >
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="/">
              <img src={'/src/assets/images/main-logo.png'} alt="Main Logo" className="logo img-fluid mb-2" />
              </a>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                data-bs-target="#bdNavbar"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                id="navbar"
                className="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1"
              >
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="customer_dashboard.html"
                    >Home</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="customer_dashboard.html"
                    >About</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="browse_book.html"
                    >Categories</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="order_history.html"
                    >Order History</a
                  >
                </li>
              </ul>
              <div className="user-items d-flex">
                <ul className="d-flex justify-content-end list-unstyled mb-0">
                  <li className="search-item pe-3">
                    <a href="#" className="search-button">
                      <svg className="search">
                        <use xlinkHref="#search"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="pe-3">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <svg className="user">
                        <use xlinkHref="#user"></use>
                      </svg>
                    </a>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header border-bottom-0">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="tabs-listing">
                              <nav>
                                <div
                                  className="nav nav-tabs d-flex justify-content-center"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    className="nav-link text-capitalize active"
                                    id="nav-sign-in-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-sign-in"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-sign-in"
                                    aria-selected="true"
                                  >
                                    Sign In
                                  </button>
                                  <button
                                    className="nav-link text-capitalize"
                                    id="nav-register-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-register"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-register"
                                    aria-selected="false"
                                    tabIndex="-1"
                                  >
                                    Register
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade active show"
                                  id="nav-sign-in"
                                  role="tabpanel"
                                  aria-labelledby="nav-sign-in-tab"
                                >
                                  <div className="form-group py-3">
                                    <label className="mb-2" htmlFor="sign-in"
                                      >Username or email address *</label
                                    >
                                    <input
                                      type="text"
                                      minLength="2"
                                      name="username"
                                      placeholder="Your Username"
                                      className="form-control w-100 rounded-3 p-3"
                                      required=""
                                    />
                                  </div>
                                  <div className="form-group pb-3">
                                    <label className="mb-2" htmlFor="sign-in"
                                      >Password *</label
                                    >
                                    <input
                                      type="password"
                                      minLength="2"
                                      name="password"
                                      placeholder="Your Password"
                                      className="form-control w-100 rounded-3 p-3"
                                      required=""
                                    />
                                  </div>
                                  <label className="py-3">
                                    <input
                                      type="checkbox"
                                      required=""
                                      className="d-inline"
                                    />
                                    <span className="label-body">Remember me</span>
                                    <span className="label-body"
                                      ><a href="#" className="fw-bold"
                                        >Forgot Password</a
                                      ></span
                                    >
                                  </label>
                                  <button
                                    type="submit"
                                    name="submit"
                                    className="btn btn-dark w-100 my-3"
                                  >
                                    Login
                                  </button>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-register"
                                  role="tabpanel"
                                  aria-labelledby="nav-register-tab"
                                >
                                  <div className="form-group py-3">
                                    <label className="mb-2" htmlFor="register"
                                      >Your email address *</label
                                    >
                                    <input
                                      type="text"
                                      minLength="2"
                                      name="username"
                                      placeholder="Your Email Address"
                                      className="form-control w-100 rounded-3 p-3"
                                      required=""
                                    />
                                  </div>
                                  <div className="form-group pb-3">
                                    <label className="mb-2" htmlFor="sign-in"
                                      >Password *</label
                                    >
                                    <input
                                      type="password"
                                      minLength="2"
                                      name="password"
                                      placeholder="Your Password"
                                      className="form-control w-100 rounded-3 p-3"
                                      required=""
                                    />
                                  </div>
                                  <label className="py-3">
                                    <input
                                      type="checkbox"
                                      required=""
                                      className="d-inline"
                                    />
                                    <span className="label-body"
                                      >I agree to the
                                      <a href="#" className="fw-bold"
                                        >Privacy Policy</a
                                      ></span
                                    >
                                  </label>
                                  <button
                                    type="submit"
                                    name="submit"
                                    className="btn btn-dark w-100 my-3"
                                  >
                                    Register
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="cart-dropdown dropdown">
                    <a
                      href="cart.html"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <svg className="cart">
                        <use xlinkHref="#cart"></use>
                      </svg>
                    </a>
                    <div
                      className="dropdown-menu animate slide dropdown-menu-start dropdown-menu-lg-end p-3"
                    >
                      <h4
                        className="d-flex justify-content-between align-items-center mb-3"
                      >
                        <span className="text-primary">My cart</span>
                      </h4>

                      <div className="d-flex flex-wrap justify-content-center">
                        <a
                          href="cart.html"
                          className="w-100 btn btn-dark mb-1"
                          type="submit"
                          >View Cart</a
                        >
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <section id="best-selling-items" className="position-relative padding-large">
      <div className="container">
        <div
          className="section-title d-md-flex justify-content-between align-items-center mb-4"
        >
          <h3 className="d-flex align-items-center">Best selling items</h3>
          <a href="/" className="btn">View All</a>
        </div>
        <div
          className="swiper product-swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
        >
              <Swiper
      slidesPerView={5}
      direction={'horizontal'}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]}
      style={{
        maxWidth: "1200px",
        
      }}
    >

            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide swiper-slide-active"
           
            >
              <div className="card position-relative p-4 border rounded-3">
                <div className="position-absolute">
                  <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                    10% off
                  </p>
                </div>
                <img
                  src="/src/assets/images/product-item1.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">House of Sky Breath</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>
                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide swiper-slide-next"
              role="group"
              style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item2.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">Heartland Stars</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item3.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">Heavenly Bodies</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <div className="position-absolute">
                  <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                    10% off
                  </p>
                </div>
                <img
                  src="/src/assets/images/product-item4.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">His Saving Grace</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item5.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">My Dearest Darkest</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div
                    className="rating text-warning d-flex align-items-center d-flex align-items-center"
                  >
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
              </SwiperSlide>
            <SwiperSlide style={{
              marginRight: '20px'
            }}>
              <div
              className="swiper-slide"
              role="group"
              aria-label="6 / 6"
                style={{
                
                
              }}
            >
              <div className="card position-relative p-4 border rounded-3">
                <img
                  src="/src/assets/images/product-item6.png"
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="/">The Story of Success</a>
                </h6>
                <div className="review-content d-flex">
                  <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                  <div className="rating text-warning d-flex align-items-center">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill"></use>
                    </svg>
                  </div>
                </div>

                <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                <div
                  className="card-concern position-absolute start-0 end-0 d-flex gap-2"
                >
                  <button
                    type="button"
                    href="#"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
              
            </SwiperSlide>
              </Swiper>
          <div
            className="position-absolute top-50  swiper-button-next"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-4410d1e4630347463"
            aria-disabled="false"
          >
            <svg
              className="chevron-forward-circle d-flex justify-content-center align-items-center p-2"
              width="80"
              height="80"
            >
              <use xlinkHref="#alt-arrow-right-outline"></use>
            </svg>
          </div>
          <div
            className="position-absolute top-50  swiper-button-prev"
            tabIndex="-1"
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-4410d1e4630347463"
            aria-disabled="true"
          >
            <svg
              className="chevron-back-circle d-flex justify-content-center align-items-center p-2"
              width="80"
              height="80"
            >
              <use xlinkHref="#alt-arrow-left-outline"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section id="company-services" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="cart-outline">
                  <use xlinkHref="#cart-outline"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  Free delivery
                </h4>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="quality">
                  <use xlinkHref="#quality"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  Quality guarantee
                </h4>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="price-tag">
                  <use xlinkHref="#price-tag"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  Daily offers
                </h4>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="shield-plus">
                  <use xlinkHref="#shield-plus"></use>
                </svg>
              </div>
              <div className="icon-box-content">
                <h4 className="card-title mb-1 text-capitalize text-dark">
                  100% secure payment
                </h4>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="limited-offer"
      className="padding-large"
      style={{
        backgroundImage: "url('/src/assets/images/banner-image-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "800px",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 text-center">
            <div className="image-holder">
              <img
                src="/src/assets/images/banner-image3.png"
                className="img-fluid"
                alt="banner"
              />
            </div>
          </div>
          <div
            className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start"
          >
            <h2>30% Discount on all items. Hurry Up !!!</h2>
            <div
              id="countdown-clock"
              className="text-dark d-flex align-items-center my-3"
            >
              <div className="time d-grid pe-3">
                <span className="days fs-1 fw-normal">27</span>
                <small>Days</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid pe-3 ps-3">
                <span className="hours fs-1 fw-normal">23</span>
                <small>Hrs</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid pe-3 ps-3">
                <span className="minutes fs-1 fw-normal">58</span>
                <small>Min</small>
              </div>
              <span className="fs-1 text-primary">:</span>
              <div className="time d-grid ps-3">
                <span className="seconds fs-1 fw-normal">14</span>
                <small>Sec</small>
              </div>
            </div>
            <a href="/" className="btn mt-3">Shop Collection</a>
          </div>
        </div>
      </div>
    </section>

    <section id="categories" className="padding-large">
      <div className="container">
        <div className="section-title overflow-hidden mb-4">
          <h3 className="d-flex align-items-center">Categories</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 border-0 rounded-3 position-relative">
              <a href="/">
                <img
                  src="/src/assets/images/category1.jpg"
                  className="img-fluid rounded-3"
                  alt="cart item"
                />
              </a>
              <h6
                className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"
              >
                <a href="/"></a
                ><a href="/" className="text-white">Romance</a>
              </h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-4 border-0 rounded-3">
              <a href="/">
                <img
                  src="/src/assets/images/category2.jpg"
                  className="img-fluid rounded-3"
                  alt="cart item"
                />
              </a>
              <h6
                className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"
              >
                <a href="/"></a
                ><a href="/" className="text-white">Lifestyle</a>
              </h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-4 border-0 rounded-3">
              <a href="/">
                <img
                  src="/src/assets/images/category3.jpg"
                  className="img-fluid rounded-3"
                  alt="cart item"
                />
              </a>
              <h6
                className="position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"
              >
                <a href="/"></a
                ><a href="/" className="text-white">Recipe</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="customers-reviews"
      className="position-relative padding-large"
      style={{
        backgroundImage: "url('/src/assets/images/banner-image-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "600px",
      }}
    >
      <div className="container offset-md-3 col-md-6 ">
      
        <div className="section-title mb-4 text-center">
          <h3 className="mb-4">Customers reviews</h3>
        </div>
        <Carousel arrows infinite={false}>
              <div
                className="card position-relative text-left p-5 border rounded-3"
              >
                <blockquote>
                  “I stumbled upon this tech store while searching for a new
                  laptop, and I couldn't be happier with my experience! The
                  staff was incredibly knowledgeable and guided me through the
                  process of choosing the perfect device for my needs. Highly
                  recommended!”
                </blockquote>
                <Rate allowHalf defaultValue={2.5} />
                <h5 className="mt-1 fw-normal">Roman</h5>
              </div>
              <div
                className="card position-relative text-left p-5 border rounded-3"
              >
                <blockquote>
                  "I ordered a few books online from this store, and I was
                  impressed by the quick delivery and careful packaging. It's
                  clear that they prioritize customer satisfaction, and I'll
                  definitely be shopping here again!"
                </blockquote>
                <Rate allowHalf defaultValue={2.5} />
                <h5 className="mt-1 fw-normal">Kevin Bryan</h5>
              </div>
        </Carousel>
      </div>
    </section>

    <section id="instagram" className="padding-large">
      <div className="container">
        <div className="text-center mb-4">
          <h3>Instagram</h3>
        </div>
        <div className="row">
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item1.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item2.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item3.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item4.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item5.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
          <div className="col-md-2">
            <figure className="instagram-item position-relative rounded-3">
              <a
                href="https://templatesjungle.com/"
                className="image-link position-relative"
              >
                <div
                  className="icon-overlay position-absolute d-flex justify-content-center"
                >
                  <svg className="instagram">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </div>
                <img
                  src="/src/assets/images/insta-item6.jpg"
                  alt="instagram"
                  className="img-fluid rounded-3 insta-image"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="footer-top-area">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu">
                <img src={'/src/assets/images/main-logo.png'} alt="Main Logo" className="logo img-fluid mb-2" />
                  <p>
                    Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit
                    hendrerit. Gravida massa volutpat aenean odio erat nullam
                    fringilla.
                  </p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <a href="#">
                          <svg className="facebook">
                            <use xlinkHref="#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="instagram">
                            <use xlinkHref="#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="twitter">
                            <use xlinkHref="#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="linkedin">
                            <use xlinkHref="#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg className="youtube">
                            <use xlinkHref="#youtube"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 pb-3">
                <div className="footer-menu text-capitalize">
                  <h5 className="widget-title pb-2">Quick Links</h5>
                  <ul className="menu-list list-unstyled text-capitalize">
                    <li className="menu-item mb-1">
                      <a href="#">Home</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">About</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Categories</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#"></a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu text-capitalize">
                  <h5 className="widget-title pb-2">Help &amp; Info Help</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item mb-1">
                      <a href="#">View Order History</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Returns Policies</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Shipping + Delivery</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Contact Us</a>
                    </li>
                    <li className="menu-item mb-1">
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-capitalize pb-2">Contact Us</h5>
                  <p>
                    Do you have any queries or suggestions?
                    <a href="mailto:" className="text-decoration-underline"
                      >yourinfo@gmail.com</a
                    >
                  </p>
                  <p>
                    If you need support? Just give us a call.
                    <a href="#" className="text-decoration-underline"
                      >+55 111 222 333 44</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <hr />
    <div id="footer-bottom" className="mb-2">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="ship-and-payment d-flex gap-md-5 flex-wrap">
            <div className="shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src="/src/assets/images/dhl.png" alt="visa" />
                <img src="/src/assets/images/shippingcard.png" alt="mastercard" />
              </div>
            </div>
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
                <img src="/src/assets/images/visa.jpg" alt="visa" />
                <img src="/src/assets/images/mastercard.jpg" alt="mastercard" />
                <img src="/src/assets/images/paypal.jpg" alt="paypal" />
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              © Copyright 2024 Bookly. HTML Template by
              <a href="https://templatesjungle.com/" target="_blank"
                >TemplatesJungle</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
