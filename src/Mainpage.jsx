import { ImSearch } from "react-icons/im";
import { Fade } from 'react-reveal';

const Mainpage = ({setIndex,currentQuote,index}) => {

    return (

        <main className="flex-col h-screen w-screen">

            <section className="flex fixed top-0 items-center lg:justify-between xs:justify-center md:justify-center border-b border-gray h-24 w-full overflow-hidden z-10 bg-white xs:justify-center">
                <a href="https://www.brandingbusiness.com" className="pl-10 xs:pt-4 xs:pl-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="370" height="57" viewBox="0 0 370 57">
                    <title>Branding Business Logo</title>
                    <g fill="none">
                        <path fill="#DA1C49" d="M364.8 13.7c2.7-.6 4.9-3 4.9-6.5 0-3.8-2.8-7.2-8.2-7.2h-30.2v27.4h30.2c5.4 0 8.2-3.5 8.2-7.2 0-3.6-2.2-6-4.9-6.5ZM344.1 22h-6.7v-6h6.7c2 0 3.2 1.3 3.2 3 0 1.8-1.2 3-3.2 3Zm0-10.9h-6.7v-6h6.7c2 0 3.2 1.3 3.2 3 0 1.8-1.2 3-3.2 3ZM360.2 22h-6.7v-6h6.7c2 0 3.2 1.3 3.2 3 0 1.8-1.2 3-3.2 3Zm0-10.9h-6.7v-6h6.7c2 0 3.2 1.3 3.2 3 0 1.8-1.2 3-3.2 3Z"></path>
                        <path fill="#000" d="M.1 27.4V0h14.4c5.2 0 7.8 3.3 7.8 7 0 3.4-2.1 5.7-4.7 6.2 3 .5 5.3 3.3 5.3 6.7 0 4.1-2.8 7.4-8 7.4H.1ZM16.4 8c0-1.7-1.2-3-3.2-3H6v6h7.3c2 0 3.2-1.3 3.2-3Zm.5 11.1c0-1.7-1.2-3.2-3.5-3.2H6v6.4h7.5c2.2 0 3.5-1.2 3.5-3.2Zm9.2 8.3V7.6h5.2v2.7a8.5 8.5 0 0 1 6.3-3.2v5.1a7 7 0 0 0-1.4-.1 7 7 0 0 0-4.9 2.2v13h-5.2Zm48.3 0v-12c0-2.7-1.5-3.6-3.7-3.6-2 0-3.6 1.1-4.5 2.3v13.3H61V7.6h5.2v2.6a9 9 0 0 1 7-3c4.3 0 6.4 2.4 6.4 6.2v14h-5.2Zm22.9 0v-2.5c-1.6 2-3.7 3-6 3-5 0-8.8-3.8-8.8-10.4 0-6.5 3.7-10.3 8.7-10.3 2.3 0 4.5 1 6.1 3V.2h5.2v27.2h-5.2Zm0-6.4v-7a5.7 5.7 0 0 0-4.5-2.2c-3 0-5 2.3-5 5.7 0 3.5 2 5.8 5 5.8 1.8 0 3.6-1 4.5-2.3Zm9.4-13.4h5.2v19.7h-5.2zm22.7 19.8v-12c0-2.7-1.5-3.6-3.7-3.6-2 0-3.6 1.1-4.5 2.3v13.3H116V7.6h5.2v2.6a9 9 0 0 1 7-3c4.3 0 6.3 2.4 6.3 6.2v14h-5.1Zm31.9 0V0h14.4c5.2 0 7.8 3.3 7.8 7 0 3.4-2 5.7-4.7 6.2 3 .5 5.3 3.3 5.3 6.7 0 4.1-2.8 7.4-8 7.4h-14.8ZM177.6 8c0-1.7-1.2-3-3.2-3h-7.3v6h7.3c2 0 3.2-1.3 3.2-3Zm.5 11.1c0-1.7-1.2-3.2-3.5-3.2h-7.5v6.4h7.5c2.2 0 3.5-1.2 3.5-3.2Zm22.4 8.3v-2.5a9.2 9.2 0 0 1-7 3c-4.3 0-6.4-2.4-6.4-6.2v-14h5.2v12c0 2.7 1.5 3.6 3.7 3.6 2 0 3.6-1.1 4.5-2.3V7.6h5.2v19.8h-5.2Zm7.8-2.6 2.2-3.6c1.4 1.3 4.4 2.7 6.8 2.7 2.3 0 3.4-1 3.4-2.2 0-3.2-11.8-.6-11.8-8.3 0-3.3 3-6.2 8.1-6.2 3.4 0 6 1.1 8 2.7l-2.1 3.5a8.3 8.3 0 0 0-5.8-2.3c-2 0-3.2.9-3.2 2 0 3 11.7.5 11.7 8.4 0 3.6-3 6.4-8.5 6.4-3.4 0-6.8-1.2-8.8-3Zm20.2-17.2h5.2v19.7h-5.2zm22.7 19.8v-12c0-2.7-1.4-3.6-3.6-3.6-2 0-3.7 1.1-4.5 2.3v13.3h-5.2V7.6h5.2v2.6a9 9 0 0 1 6.9-3c4.3 0 6.4 2.4 6.4 6.2v14h-5.2Zm8-9.9A10 10 0 0 1 269.5 7c6 0 9.9 4.5 9.9 11v1h-14.7c.3 2.6 2.3 4.6 5.7 4.6 1.6 0 4-.7 5.2-2l2.3 3.4c-2 1.8-5 2.8-8.1 2.8-6 0-10.6-4-10.6-10.4Zm10.3-6.2c-3.3 0-4.7 2.4-4.9 4.4h9.7a4.6 4.6 0 0 0-4.8-4.4Zm11.1 13.5 2.3-3.6c1.4 1.3 4.4 2.7 6.8 2.7 2.3 0 3.3-1 3.3-2.2 0-3.2-11.7-.6-11.7-8.3 0-3.3 2.9-6.2 8-6.2 3.4 0 6.1 1.1 8 2.7l-2 3.5a8.3 8.3 0 0 0-5.9-2.3c-1.9 0-3 .9-3 2 0 3 11.6.5 11.6 8.4 0 3.6-3 6.4-8.5 6.4a14 14 0 0 1-8.9-3Zm19 0 2.2-3.6c1.5 1.3 4.4 2.7 6.9 2.7 2.2 0 3.3-1 3.3-2.2 0-3.2-11.8-.6-11.8-8.3 0-3.3 3-6.2 8.1-6.2 3.4 0 6 1.1 8 2.7l-2 3.5a8.3 8.3 0 0 0-6-2.3c-1.8 0-3 .9-3 2 0 3 11.7.5 11.7 8.4 0 3.6-3.1 6.4-8.6 6.4a14 14 0 0 1-8.8-3ZM151 22.7l-2.6-.2c-1 0-3.2 0-4.2-.3-.7-.3-1.1-.7-1.1-1.6 0-.6.4-1.1 1-1.4l3.3.3c3.7 0 8.8-1.4 8.8-6V6h-5v1.6c-1.3-.3-2.7-.5-4.1-.5-3.9 0-9.1 1.4-9.1 6.2 0 2.4 1.4 4 3.5 4.8-2 .8-4 2-4 4.4 0 1.8 1 2.8 2.6 3.6-1.8.4-3.5 1.5-3.5 3.6 0 4.4 7 4.6 10.2 4.6a20 20 0 0 0 7.3-1c2.3-1 4.2-2.8 4.2-5.5 0-4.3-3.9-5-7.4-5.2Zm-4-12.4c1.8 0 3.4 1 3.4 3s-1.5 3-3.4 3-3.2-1-3.2-3 1.4-3 3.2-3Zm.5 20.6c-1.3 0-3 0-4.3-.4-.8-.3-1.5-.7-1.5-1.6 0-.8.6-1.4 1.3-1.6h3l4.7.3c.9 0 2.2.3 2.2 1.3 0 2-4 2-5.4 2Zm-95.8-8.5v.2c-.8 1.2-2.5 1.8-4.1 1.8-2 0-3.8-1.1-3.8-3 0-1.8 1.7-3 3.8-3h4.1v4ZM48.3 7a13 13 0 0 0-8.6 3.2l2 3.4a8.3 8.3 0 0 1 5.7-2.3c2.6 0 4.3 1.3 4.3 3.3v.3h-6.2c-3.2 0-6.9 1.7-6.9 6.3 0 4.7 3.7 6.6 6.9 6.6 2.5 0 4.9-1 6.2-2.6v2H57V14.7c0-5.7-4.1-7.5-8.6-7.5ZM6 40.8c2 0 3.4.8 4.5 2l-.8.6c-.8-1-2.2-1.6-3.7-1.6-2.8 0-5 2-5 5.2a5 5 0 0 0 5 5.2 5 5 0 0 0 3.5-1.5V48H5v-1h5.5v4.2a6 6 0 0 1-4.5 2A6 6 0 0 1 0 47a6 6 0 0 1 6-6.2Zm7 .2h1v11.8h-1zm3.3 7.6c0-2.5 1.6-4.5 4.1-4.5 2.6 0 4.2 2 4.2 4.5S23 53 20.4 53c-2.5 0-4-2-4-4.5Zm7.3 0c0-2-1.1-3.7-3.2-3.7-2 0-3 1.8-3 3.7 0 1.9 1 3.6 3 3.6s3.2-1.7 3.2-3.6ZM27 41h.9v4.7c.7-1 1.8-1.6 3-1.6 2.3 0 3.8 1.8 3.8 4.5S33.1 53 30.9 53c-1.3 0-2.4-.7-3-1.6v1.4h-1V41Zm3.7 11.3c2 0 3-1.6 3-3.7 0-2-1-3.7-3-3.7-1.2 0-2.3.8-2.8 1.6v4.2c.5.8 1.6 1.6 2.8 1.6Zm11.8-.4c-.7.8-1.7 1.2-2.9 1.2-1.4 0-3-1-3-2.9 0-1.8 1.5-2.8 3-2.8a4 4 0 0 1 3 1.2V47c0-1.3-1-2-2.4-2-1 0-1.9.4-2.6 1.3l-.6-.7c1-1 2-1.4 3.3-1.4 1.8 0 3.2.8 3.2 2.7v6h-1v-1Zm0-2.6a3.2 3.2 0 0 0-2.6-1.2c-1.4 0-2.3 1-2.3 2.1 0 1.3 1 2.2 2.3 2.2 1 0 2-.4 2.6-1.2v-1.9Zm3.8-8.3h1v11.8h-1zm8.5 0h4.8c2 0 3.3 1.2 3.3 3 0 1.5-1 2.6-2 2.8 1.2.2 2.2 1.5 2.2 2.9 0 2-1.3 3.2-3.4 3.2h-5V41Zm4.7 5.3c1.5 0 2.3-1 2.3-2.1 0-1.3-.8-2.2-2.3-2.2h-3.7v4.3h3.7Zm0 5.7c1.6 0 2.6-1 2.6-2.4 0-1.2-.9-2.3-2.5-2.3h-3.8v4.6h3.8Zm5.7 0c4-3.2 6.7-5.5 6.7-7.8 0-1.7-1.4-2.4-2.7-2.4-1.5 0-2.6.6-3.2 1.5l-.7-.6a4.8 4.8 0 0 1 4-1.8c1.6 0 3.6 1 3.6 3.3 0 2.6-2.7 5-6.1 7.7H73v1h-7.8V52ZM76 41h4.9c2 0 3.2 1.2 3.2 3 0 1.5-1 2.6-2 2.8 1.2.2 2.2 1.5 2.2 2.9 0 2-1.2 3.2-3.3 3.2h-5V41Zm4.7 5.3c1.6 0 2.4-1 2.4-2.1 0-1.3-.9-2.2-2.4-2.2H77v4.3h3.7Zm.1 5.7c1.6 0 2.5-1 2.5-2.4 0-1.2-.9-2.3-2.5-2.3H77v4.6h3.8Zm10.7-11h4.8c2 0 3.3 1.2 3.3 3 0 1.5-1 2.6-2 2.8 1.2.2 2.2 1.5 2.2 2.9 0 2-1.2 3.2-3.3 3.2h-5V41Zm4.7 5.3c1.5 0 2.3-1 2.3-2.1 0-1.3-.8-2.2-2.3-2.2h-3.7v4.3h3.7Zm0 5.7c1.7 0 2.6-1 2.6-2.4 0-1.2-.9-2.3-2.5-2.3h-3.8v4.6h3.8Zm6.1-7.7h1v1.5c.7-1 1.7-1.7 2.9-1.7v1h-.5c-.9 0-2 .8-2.4 1.5V53h-1v-8.6Zm11.1 7.6c-.7.8-1.7 1.2-2.9 1.2-1.5 0-3-1-3-2.9 0-1.8 1.5-2.8 3-2.8a4 4 0 0 1 3 1.2V47c0-1.3-1.1-2-2.4-2-1 0-1.9.4-2.7 1.3l-.5-.7c1-1 1.9-1.4 3.3-1.4 1.8 0 3.1.8 3.1 2.7v6h-.9v-1Zm0-2.6a3.2 3.2 0 0 0-2.6-1.2c-1.4 0-2.3 1-2.3 2.1 0 1.3 1 2.2 2.3 2.2 1 0 2-.4 2.6-1.2v-1.9ZM123 47c0-1.6-.8-2-2-2s-2.3.6-2.9 1.4v6.5h-.9v-8.6h1v1.3c.6-.7 1.8-1.5 3-1.5 1.8 0 2.7.8 2.7 2.8v6h-.9V47Zm10.1 4.5c-.6.9-1.7 1.6-3 1.6-2.2 0-3.8-1.8-3.8-4.5 0-2.8 1.6-4.5 3.8-4.5 1.3 0 2.3.6 3 1.6V41h1v12h-1v-1.4Zm0-5a3.4 3.4 0 0 0-2.8-1.6c-1.9 0-3 1.6-3 3.7 0 2 1.1 3.7 3 3.7 1.2 0 2.3-.8 2.8-1.6v-4.2Zm8.5 3.9c.7 1 2 1.8 3.7 1.8 2.4 0 3-1.4 3-2.4 0-1.7-1.5-2.1-3.2-2.6-1.8-.5-3.8-1-3.8-3.2 0-2 1.7-3.2 3.9-3.2 1.8 0 3 .7 4 1.7l-.7.7c-.8-1-2-1.4-3.4-1.4-1.6 0-2.7.9-2.7 2.1 0 1.4 1.4 1.8 3 2.3 2 .5 4 1.1 4 3.5 0 1.6-1 3.4-4.1 3.4-2 0-3.5-.8-4.4-1.9l.7-.8Zm10.1.8v-6h-1.4v-.9h1.4V42h1v2.3h1.7v.8h-1.8v6c0 .7.3 1.2 1 1.2.3 0 .7-.2.9-.5l.3.8a2 2 0 0 1-1.4.5c-1.2 0-1.7-.7-1.7-1.9Zm4.7-6.9h1v1.5c.6-1 1.6-1.7 2.8-1.7v1h-.5c-.8 0-2 .8-2.4 1.5V53h-1v-8.6Zm11.1 7.6a4 4 0 0 1-3 1.2c-1.4 0-3-1-3-2.9 0-1.8 1.6-2.8 3-2.8a4 4 0 0 1 3 1.2V47c0-1.3-1-2-2.3-2-1.1 0-2 .4-2.7 1.3l-.5-.7c.8-1 1.8-1.4 3.3-1.4 1.7 0 3 .8 3 2.7v6h-.8v-1Zm0-2.6a3.2 3.2 0 0 0-2.6-1.2c-1.4 0-2.4 1-2.4 2.1 0 1.3 1 2.2 2.4 2.2 1 0 2-.4 2.6-1.2v-1.9Zm3.9 1.9v-6H170v-.9h1.4V42h1v2.3h1.7v.8h-1.7v6c0 .7.3 1.2.9 1.2.4 0 .7-.2 1-.5l.3.8a2 2 0 0 1-1.5.5c-1.1 0-1.7-.7-1.7-1.9Zm8.4-7.2c2.6 0 4 2.2 4 4.6v.3h-7.1c0 1.8 1.3 3.4 3.3 3.4 1.1 0 2-.4 2.8-1.2l.5.6c-.9.9-2 1.4-3.4 1.4-2.5 0-4.3-1.9-4.3-4.5 0-2.5 1.8-4.5 4.2-4.5Zm-3.1 4.1h6.2c0-1.4-1-3.2-3.1-3.2-2 0-3 1.8-3.2 3.2Zm10 6.2c.8 1 1.6 1.2 2.9 1.2 1.5 0 3-.7 3-2.7v-1.4c-.7 1-1.8 1.6-3 1.6-2.3 0-3.9-1.7-3.9-4.4 0-2.8 1.6-4.5 3.8-4.5 1.3 0 2.3.6 3 1.6v-1.4h1v8.5c0 2.6-1.8 3.5-4 3.5-1.3 0-2.3-.2-3.3-1.3l.6-.7Zm5.8-7.8a3.4 3.4 0 0 0-2.8-1.6c-1.9 0-3 1.6-3 3.7 0 2 1.1 3.6 3 3.6 1.2 0 2.3-.7 2.8-1.5v-4.2Zm4.2 9c.5 0 1-.2 1.3-1l.6-1.6-3.6-8.6h1l3.2 7.5 3-7.5h1L199 54.8c-.5 1-1.2 1.5-2.2 1.5h-1l.2-1c.2.2.5.2.8.2Zm18.2-3.6a4 4 0 0 1-3 1.2c-1.4 0-3-1-3-2.9 0-1.8 1.6-2.8 3-2.8 1.3 0 2.3.4 3 1.2V47c0-1.3-1-2-2.3-2-1 0-2 .4-2.7 1.3l-.5-.7a4 4 0 0 1 3.3-1.4c1.7 0 3.1.8 3.1 2.7v6h-.9v-1Zm0-2.6a3.2 3.2 0 0 0-2.6-1.2c-1.4 0-2.3 1-2.3 2.1 0 1.3.9 2.2 2.3 2.2 1 0 2-.4 2.6-1.2v-1.9Zm9.6-2.3c0-1.6-.9-2-2.1-2-1.1 0-2.2.6-2.8 1.4v6.5h-1v-8.6h1v1.3c.6-.7 1.9-1.5 3.1-1.5 1.7 0 2.7.8 2.7 2.8v6h-1V47Zm10.1 4.5c-.6.9-1.7 1.6-3 1.6-2.3 0-3.8-1.8-3.8-4.5 0-2.8 1.5-4.5 3.8-4.5 1.2 0 2.3.6 3 1.6V41h1v12h-1v-1.4Zm0-5a3.4 3.4 0 0 0-2.8-1.6c-2 0-3 1.6-3 3.7 0 2 1 3.7 3 3.7 1.2 0 2.3-.8 2.8-1.6v-4.2Zm8 .5c0-3.7 2.6-6.2 6-6.2 1.9 0 3.3.9 4.3 2.1l-.8.6c-.8-1-2-1.7-3.5-1.7-2.8 0-5 2-5 5.2a5 5 0 0 0 5 5.2c1.4 0 2.7-.7 3.5-1.8l.8.6a5.3 5.3 0 0 1-4.3 2c-3.4 0-6-2.4-6-6Zm12.4-2.7h.9v1.5c.7-1 1.7-1.7 2.9-1.7v1h-.5c-.9 0-2 .8-2.4 1.5V53h-1v-8.6Zm9.2-.3c2.6 0 4 2.2 4 4.6v.3h-7.1c0 1.8 1.3 3.4 3.3 3.4 1.1 0 2.1-.4 2.8-1.2l.5.6c-.8.9-2 1.4-3.3 1.4-2.5 0-4.3-1.9-4.3-4.5 0-2.5 1.7-4.5 4.1-4.5Zm-3.1 4.1h6.2c0-1.4-1-3.2-3.1-3.2-2 0-3 1.8-3.1 3.2Zm14.9 3.8c-.7.8-1.7 1.2-2.8 1.2-1.5 0-3-1-3-2.9 0-1.8 1.5-2.8 3-2.8a4 4 0 0 1 2.9 1.2V47c0-1.3-1-2-2.3-2-1.1 0-2 .4-2.7 1.3l-.5-.7a4 4 0 0 1 3.3-1.4c1.7 0 3 .8 3 2.7v6h-.8v-1Zm0-2.6a3.2 3.2 0 0 0-2.5-1.2c-1.4 0-2.4 1-2.4 2.1 0 1.3 1 2.2 2.4 2.2 1 0 2-.4 2.6-1.2v-1.9Zm4 1.9v-6h-1.4v-.9h1.4V42h1v2.3h1.7v.8H281v6c0 .7.3 1.2.9 1.2.4 0 .7-.2 1-.5l.3.8a2 2 0 0 1-1.5.5c-1.1 0-1.7-.7-1.7-1.9Zm4.5-9.1c0-.4.3-.7.7-.7a.7.7 0 1 1-.7.7Zm.2 2.2h1v8.6h-1v-8.6Zm2.5 0h1.1l3.1 7.5 3.1-7.5h1l-3.6 8.5h-1l-3.7-8.5zm13.5-.3c2.6 0 4 2.2 4 4.6v.3h-7.1c0 1.8 1.3 3.4 3.4 3.4 1 0 2-.4 2.8-1.2l.4.6c-.8.9-1.9 1.4-3.3 1.4-2.5 0-4.3-1.9-4.3-4.5 0-2.5 1.7-4.5 4.1-4.5Zm-3.1 4.1h6.2c0-1.4-1-3.2-3.1-3.2-2 0-3 1.8-3.1 3.2Zm21.6 1.9h-6.3l-1.2 2.9h-1.1l4.8-11.9h1.3l4.8 11.9h-1.1l-1.2-3Zm-6-1h5.7l-2.9-7-2.8 7Zm10.6 5.3c.7 1 1.5 1.2 2.8 1.2 1.6 0 3-.7 3-2.7v-1.4c-.7 1-1.8 1.6-3 1.6-2.3 0-3.9-1.7-3.9-4.4 0-2.8 1.6-4.5 3.9-4.5 1.2 0 2.3.6 3 1.6v-1.4h.9v8.5c0 2.6-1.8 3.5-3.9 3.5-1.4 0-2.3-.2-3.4-1.3l.6-.7Zm5.7-7.8a3.4 3.4 0 0 0-2.8-1.6c-1.9 0-3 1.6-3 3.7 0 2 1.1 3.6 3 3.6 1.2 0 2.3-.7 2.8-1.5v-4.2ZM337 44c2.6 0 4 2.2 4 4.6v.3h-7c0 1.8 1.3 3.4 3.3 3.4 1.1 0 2-.4 2.8-1.2l.5.6c-.9.9-2 1.4-3.4 1.4-2.5 0-4.3-1.9-4.3-4.5 0-2.5 1.8-4.5 4.2-4.5Zm-3.1 4.1h6.2c0-1.4-1-3.2-3.1-3.2-2 0-3 1.8-3.2 3.2Zm15.3-1.1c0-1.6-.8-2-2-2s-2.3.6-2.9 1.4v6.5h-.9v-8.6h1v1.3c.5-.7 1.8-1.5 3-1.5 1.7 0 2.7.8 2.7 2.8v6h-1V47Zm7.5-3c1.4 0 2.3.7 3 1.5l-.6.6a2.7 2.7 0 0 0-2.4-1.2c-2 0-3.2 1.6-3.2 3.7 0 2 1.2 3.7 3.2 3.7 1 0 1.7-.4 2.4-1.3l.6.6c-.7.9-1.6 1.5-3 1.5-2.6 0-4.2-2-4.2-4.5s1.6-4.5 4.2-4.5Zm5.3 11.5c.7 0 1-.2 1.4-1l.7-1.6-3.7-8.6h1l3.2 7.5 3-7.5h1.1l-4.4 10.5c-.5 1-1.2 1.5-2.2 1.5h-1l.2-1c.2.2.6.2.8.2Z"></path>
                    </g>
                    </svg>     
                </a>
                <div className="flex justify-around gap-10 md:ml-10 font-bold text-lg pr-10 xs:hidden">
                    <h2 className="cursor-pointer hover:text-pink">About</h2>
                    <h2 className="cursor-pointer hover:text-pink">Business challenges</h2>
                    <h2 className="cursor-pointer hover:text-pink">Approach</h2>
                    <h2 className="cursor-pointer hover:text-pink">Work</h2>
                    <h2 className="cursor-pointer hover:text-pink">B2B Insights</h2>
                    <h2 className="cursor-pointer hover:text-pink">Contact</h2>
                    <h2 className="text-2xl cursor-pointer hover:text-pink"><ImSearch/></h2>
                </div>
            </section>

            <section className="flex items-center w-screen background-change justify-start h-5/6 mt-24 xs:w-[470px] ">
                <h1 className="text-7xl text-white pl-10 google-font font-bold xs:text-4xl">We create business momentum through the inspirational power of your brand.</h1>
            </section>

            <section className="flex flex-col items-center w-screen md:w-screen justify-start pt-16 gap-16 z-1 xs:w-[470px]">
                    <div className="flex flex-col gap-16 w-4/6 xs:w-full">
                        <h1 className="text-5xl text-left pl-6 relative border-l-[10px] border-black right-8 pt-0 w-full font-bold ml-10 xs:text-2xl xs:text-center xs:pl-0">BrandingBusiness is a specialist B2B brand strategy and creative agency.</h1>
                        <p className="text-5xl text-left w-full font-bold tracking-normal pl-10 google-font xs:text-2xl xs-text-center">For more than 25 years, we have helped disruptors and industry leaders to grow, flourish, and maintain business momentum in a world of dynamic change.</p>
                    </div>
                    <button className="border-2 lg:text-lg xs:text-sm border-pink pt-2.5 pb-2.5 pr-16 pl-16 font-bold hover:bg-pink">ABOUT US</button>
            </section>

            <section className="flex flex-row justify-center w-full pt-24 gap-12 xs:flex xs:flex-col xs:items-center xs:w-[470px]">
                    <img className='w-2/5 h-2/5 xs:h-96 xs:w-11/12' src="https://e1.nmcdn.io/brandingbusiness/wp-content/uploads/2020/12/Callout_Image_1040x740_BB25YearsBook-R_Fnl.jpg/v:1-width:800-height:572-fit:cover/Callout_Image_1040x740_BB25YearsBook-R_Fnl.jpg?signature=b09ecc1d"></img>
                    <div className="flex flex-col items-start justify-center w-2/5 gap-10 xs:items-center xs:w-10/12">
                        <p className="w-full font-normal text-xl leading-8 xs:text-xl">As we celebrated our 25th year in business, we asked our team to prepare a list of 25 learnings to share with our readers, clients and partners—the inherent truths we’ve come to understand and respect about the world of B2B branding. We hope you take from it some knowledge that can support your professional journey.</p>
                        <button className="border-2 w-fit text-md border-pink pt-3 pb-3 pr-16 pl-16 font-bold hover:bg-pink">DOWNLOAD YOUR COPY</button>
                    </div>
            </section>

            <section className="flex flex-col items-center w-full pt-28 gap-12 xs:w-[470px]">
                <h1 className="lg:text-[5rem] google-font font-bold xs:text-4xl md:text-3xl">LATEST B2B INSIGHTS</h1>
                <Fade>
                <div className="grid grid-cols-3 grid-rows-4 grid-rows-[0.5fr] w-10/12 gap-x-6 gap-y-2">
                    <img src="https://e1.nmcdn.io/brandingbusiness/wp-content/uploads/2023/07/Emtek_Creating-Excitement_1200x628.jpg/v:1-width:540-height:280-fit:cover/Emtek_Creating-Excitement_1200x628.jpg?signature=34924b10"></img>
                    <img src="https://e1.nmcdn.io/brandingbusiness/wp-content/uploads/2023/06/Three_Critical_Variables_Blog_1200x628_Fnl.jpg/v:1-width:540-height:280-fit:cover/Three_Critical_Variables_Blog_1200x628_Fnl.jpg?signature=6f766c67"></img>
                    <img src="https://e1.nmcdn.io/brandingbusiness/wp-content/uploads/2023/06/ClimateChange_1200x628_c2-1.jpg/v:1-width:540-height:280-fit:cover/ClimateChange_1200x628_c2-1.jpg?signature=c94b5701"></img>
                    <p className="font-bold tracking-widest">PODCAST</p>
                    <p className="font-bold tracking-widest">BLOG</p>
                    <p className="font-bold tracking-widest">PODCAST</p>
                    <h1 className='text-2xl font-bold cursor-pointer hover:text-pink'>Employer Branding: A President’s Perspective on a Top-Down, Bottom-Up Approach for Deeper Employee Engagement</h1>
                    <h1 className='text-2xl font-bold cursor-pointer hover:text-pink'>What’s the ROI on Branding? It Depends on What you Mean by Return, Investment, and Branding</h1>
                    <h1 className='text-2xl font-bold cursor-pointer hover:text-pink'>Why it’s Time for Companies to Own the Energy Problem and Play Offense</h1>
                    <a className="text-pink text-lg font-bold cursor-pointer">READ MORE</a>
                    <a className="text-pink text-lg font-bold cursor-pointer">READ MORE</a>
                    <a className="text-pink text-lg font-bold cursor-pointer">READ MORE</a>
                </div>
                <button className="border-2 border-pink 2-fit hover:bg-pink px-16 py-3 font-bold">VIEW ALL INSIGHTS</button>
                </Fade>
            </section>

            <section className="flex flex-col items-center pt-28 gap-12 w-full xs:w-[470px]">
                <h1 className="google-font font-bold lg:text-[5rem] xs:text-4xl md:text-4xl">OUR WORK</h1>
                <Fade>
                <div className="flex flex-row justify-center w-11/12 gap-12 xs:flex-col xs:items-center xs:w-full">
                    <div className="flex flex-col gap-2 w-1/3 xs:w-10/12">
                        <img className="w-96 h-64" src="https://e1.nmcdn.io/brandingbusiness/wp-content/uploads/2023/05/Expereo_CS_Preview_828x560.jpg/v:1-width:414-height:280-fit:cover/Expereo_CS_Preview_828x560.jpg?signature=3b18d4e2"></img>
                        <p className="text-base tracking-widest">CASE STUDY</p>
                        <p className="text-2xl font-bold">EXPEREO</p>
                        <p className="text-2xl font-bold cursor-pointer hover:text-pink">FASTER TO THE FUTURE OF GLOBAL ENTERPRISE NETWORKS.</p>
                        <a className="text-pink font-bold text-lg cursor-pointer">READ MORE</a>
                    </div>
                    <div className="flex flex-col gap-2 w-1/3 xs:w-10/12">
                        <img className="w-96 h-64" src="https://e1.nmcdn.io/brandingbusiness/wp-content/uploads/2023/05/Kiavi_Preview-Image.jpg/v:1-width:414-height:280-fit:cover/Kiavi_Preview-Image.jpg?signature=4fc6fc89"></img>
                        <p className="text-base tracking-widest">CASE STUDY</p>
                        <p className="text-2xl font-bold">KIAVI</p>
                        <p className="text-2xl font-bold cursor-pointer hover:text-pink">A BRAND BUILT TO UNLOCK THE VALUE OF AMERICA’S AGED HOMES.</p>
                        <a className="text-pink font-bold text-lg cursor-pointer">READ MORE</a>
                    </div>
                    <div className="flex flex-col gap-2 w-1/3 xs:w-10/12">
                        <img className="w-96 h-64" src="https://e1.nmcdn.io/brandingbusiness/wp-content/uploads/2023/04/Foth_Preview-Image.jpg/v:1-width:414-height:280-fit:cover/Foth_Preview-Image.jpg?signature=fb4d461c"></img>
                        <p className="text-base tracking-widest">CASE STUDY</p>
                        <p className="text-2xl font-bold">FOTH</p>
                        <p className="text-2xl font-bold cursor-pointer hover:text-pink">POSITIONING AND UNIFYING AN ENGINEERING LEADER FOR FUTURE SUCCESS.</p>
                        <a className="text-pink font-bold text-lg cursor-pointer">READ MORE</a>
                    </div>
                </div>
                <button className="border-2 border-pink w-fit px-16 py-3 font-bold hover:bg-pink">VIEW ALL CASE STUDIES</button>
                </Fade>
            </section>
            <section className="flex flex-col items-center bg-gray pt-24 pb-24 gap-8 mt-28 xs:w-[470px]">
                <h1 className="lg:text-[5rem] font-bold google-font xs:text-4xl md:text-5xl">BRANDING SERVICES</h1>
                <Fade>
                <div className="flex flex-col w-7/12 gap-8 items-left xs:w-10/12">
                <p className="text-lg xs:text-2xl">Strategy is the foundation and superstructure of all we do. We blend rigorous analytical thinking with world-class design to deliver exceptional products—expert counsel, outstanding creative, and engagement programs that measurably enhance business performance.</p>
                <div className="flex justify-between w-full gap-8">
                    <p className="w-2/4 border-2 border-[#9ca3af] flex items-start justify-start text-4xl h-40 pt-4 pl-4 font-bold xs:text-2xl">Brand Research</p>
                    <p className="w-2/4 border-2 border-black flex items-start justify-start text-4xl h-40 pt-4 pl-4 font-bold xs:text-2xl">Brand Strategy</p>
                </div>
                <div className="flex justify-between w-full gap-8">
                     <div className="w-2/4 border-2 border-red-500 flex items-start justify-start text-4xl h-40 pt-4 pl-4 font-bold xs:text-2xl">Brand Identity</div>
                    <div className="w-2/4 border-2 border-pink flex items-start justify-start text-4xl  h-40 pt-4 pl-4 font-bold xs:text-2xl">Brand Engagement</div>
                </div>
                </div>
                <button className="border-2 border-pink w-fit px-16 py-3 hover:bg-pink font-bold mt-4">OUR APPROACH</button>
                </Fade>
            </section>

            <section className="flex flex-col justify-center w-full pt-24 items-center gap-8 xs:w-[470px]">
                <div className="flex flex-col items-left w-7/12 gap-4 border-l-[10px] border-pink pl-8 overflow-hidden xs:w-full xs:pl-4 ">
                    <p className="text-5xl text-pink font-bold overflow-auto h-[250px] xs:text-3xl">“{currentQuote.quote}”</p>
                    <p className="text-xl text-pink font-medium">{currentQuote.author}</p>
                </div>
                <div className="flex gap-2 w-6/12 justify-end xs:justify-center">
                    <button value='0' onClick={(event) => setIndex(event.target.value)} className={index == 0 ? 'bg-pink rounded-full h-4 w-4 border-0' : 'rounded-full h-4 w-4 bg-gray border-0'}></button>
                    <button value='1' onClick={(event) => setIndex(event.target.value)} className={index == 1 ? 'bg-pink rounded-full h-4 w-4 border-0' : 'rounded-full h-4 w-4 bg-gray border-0'}></button>
                    <button value='2' onClick={(event) => setIndex(event.target.value)} className={index == 2 ? 'bg-pink rounded-full h-4 w-4 border-0' : 'rounded-full h-4 w-4 bg-gray border-0'}></button>
                    <button value='3' onClick={(event) => setIndex(event.target.value)} className={index == 3 ? 'bg-pink rounded-full h-4 w-4 border-0' : 'rounded-full h-4 w-4 bg-gray border-0'}></button>
                    <button value='4' onClick={(event) => setIndex(event.target.value)} className={index == 4 ? 'bg-pink rounded-full h-4 w-4 border-0' : 'rounded-full h-4 w-4 bg-gray border-0'}></button>
                    <button value='5' onClick={(event) => setIndex(event.target.value)} className={index == 5 ? 'bg-pink rounded-full h-4 w-4 border-0' : 'rounded-full h-4 w-4 bg-gray border-0'}></button>
                    <button value='6' onClick={(event) => setIndex(event.target.value)} className={index == 6 ? 'bg-pink rounded-full h-4 w-4 border-0' : 'rounded-full h-4 w-4 bg-gray border-0'}></button>
                </div>
                <div className="h-2 w-[10%] bg-black mt-8 xs:w-[30%]"></div>
            </section>

            <section className="flex flex-row justify-around w-full pt-24 pb-20 border-b border-gray xs:flex-col xs:w-[470px] xs:items-center xs:gap-6">
                <div className="flex flex-col items-left gap-6 w-2/5 font-bold xs:w-10/12">
                    <h1 className="lg:text-7xl font-bold google-font leading-tight xs:text-4xl md:text-5xl">WE CAN HELP WITH YOUR BRANDING CHALLENGE</h1>
                    <p className="font-medium text-xl">Send us a message or call us at <span className="underline text-pink">+1 949 273 6330</span></p>
                </div>
                <form className="w-96">
                    <div className="mb-2">
                        <label htmlFor="first-name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">First Name *</label>
                        <input type="text" id="first-name" className="bg-[rgb(240,240,240)] h-10 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="last-name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Last Name *</label>
                        <input type="text" id="last-name" className="bg-[rgb(240,240,240)] h-10 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Email *</label>
                        <input type="email" id="email" className="bg-[rgb(240,240,240)] h-10 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="country" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Country *</label>
                        <select id="countries"  className="bg-[rgb(240,240,240)] h-10 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5">
                            <option disabled selected value></option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                         </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="company-name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Company Name *</label>
                        <input type="text" id="company-name" className="bg-[rgb(240,240,240)] h-10 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5" required/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="job" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Job Title</label>
                        <input type="text" id="job" className="bg-[rgb(240,240,240)] h-10 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="number" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" id="number" className="bg-[rgb(240,240,240)] h-10 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Message *</label>
                        <textarea id="message" className="bg-[rgb(240,240,240)] h-28 w-11/12 text-gray-900 text-sm focus:outline-none focus:border-2 focus:border-pink block w-full p-2.5" required/>
                    </div>
                    <p className="font-medium w-11/12">Would you like to receive B2B Insights in your inbox each month? Check the box below to join our email list. We’ll keep you up to date on the latest blogs, podcasts, and news on the topic of B2B branding.</p>
                    <div className="flex gap-2 mt-4 w-11/12">
                        <input type="checkbox"/>
                        <p>Sign me up!</p>
                    </div>
                    <button className="font-bold mt-4 w-11/12 text-lg px-16 py-3 border-2 border-pink hover:bg-pink">CONTACT US</button>
                </form>
            </section>

            <section className="flex flex-col items-center justify-start w-full pt-14 gap-6 pb-2 xs:w-[470px]">
                <a href="https://www.brandingbusiness.com" className="w-10/12 flex justify-start" aria-label="Go to BrandingBusiness home page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="40" viewBox="0 0 56 40">
                        <path fill="#1A1919" fill-rule="evenodd" d="M42.22 16.42h-9.8V7.68h9.8c2.91.01 4.69 1.86 4.7 4.4-.01 2.54-1.79 4.33-4.7 4.34zm0 15.9h-9.8v-8.74h9.8c2.91 0 4.69 1.86 4.7 4.4-.01 2.53-1.79 4.32-4.7 4.33zM18.7 16.41H8.9V7.68h9.8c2.9.01 4.69 1.86 4.7 4.4-.01 2.54-1.79 4.33-4.7 4.34zm0 15.9H8.9v-8.74h9.8c2.9 0 4.69 1.86 4.7 4.4-.01 2.53-1.79 4.32-4.7 4.33zM48.9 20c3.89-.8 7.1-4.26 7.1-9.47C56 5.02 51.98 0 44.14 0H0v40h44.14C51.98 40 56 34.98 56 29.47c0-5.2-3.21-8.66-7.1-9.47z"></path>
                    </svg>
                </a>
                <div className="flex w-10/12 justify-between items-center">
                    <p className="text-lg w-8/12 font-normal">Built on rigorous, evidence-based strategy and courageous ideas, we help B2B companies achieve breakthrough success via the inspirational power of their brands.</p>
                    <div className="flex flex-row gap-2 xs:flex-col">
                        <img className="h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png"></img>
                        <img className="h-10 w-10" src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png"></img>
                        <img className="h-10 w-10" src="https://cdn.icon-icons.com/icons2/3781/PNG/512/linkedin_social_media_professional_icon_232022.png"></img>
                    </div>
                </div>
                <p className="mt-6 text-[gray]">© 2023 BrandingBusiness. All Rights Reserved. Privacy Policy.</p>
            </section>

        </main>

    )
}

export default Mainpage