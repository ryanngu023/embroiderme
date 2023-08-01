import React from 'react';
import MailButton from './MailButton.js';

export default function Footer(props) {
    return (
        <div className='footerBackground'>
            <img src='/img/Footer Logo.png' alt='light green circle surrounding the text, EmbroiderMe and an image of a cat peeking out with two paws up' />
            <div className='footerContent'>
                <h5>Contact Us</h5>
                <p>support@embroiderme.com</p>
                <p>111-222-3333</p>
                <div className='socialLinks'>
                    <a href='https://www.instagram.com/thefufflypenguin'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <path d="M9.99999 5.54171C9.1759 5.54171 8.37032 5.77386 7.68511 6.20881C6.99991 6.64375 6.46586 7.26196 6.15049 7.98525C5.83513 8.70854 5.75261 9.50443 5.91338 10.2723C6.07416 11.0401 6.47099 11.7454 7.05371 12.299C7.63643 12.8526 8.37886 13.2296 9.18711 13.3823C9.99537 13.535 10.8331 13.4567 11.5945 13.1571C12.3559 12.8575 13.0066 12.3501 13.4644 11.6992C13.9223 11.0482 14.1667 10.2829 14.1667 9.50004C14.1667 8.45022 13.7277 7.44341 12.9463 6.70108C12.1649 5.95874 11.1051 5.54171 9.99999 5.54171ZM9.99999 11.875C9.50554 11.875 9.02219 11.7357 8.61106 11.4748C8.19994 11.2138 7.87951 10.8429 7.69029 10.4089C7.50107 9.97494 7.45156 9.49741 7.54803 9.0367C7.64449 8.576 7.88259 8.15281 8.23222 7.82066C8.58185 7.48851 9.02731 7.26232 9.51226 7.17068C9.99722 7.07904 10.4999 7.12607 10.9567 7.30583C11.4135 7.48558 11.804 7.78999 12.0787 8.18056C12.3534 8.57113 12.5 9.03031 12.5 9.50004C12.5 10.1299 12.2366 10.734 11.7678 11.1794C11.2989 11.6248 10.663 11.875 9.99999 11.875ZM14.1667 4.75004C14.0018 4.75004 13.8407 4.79647 13.7037 4.88346C13.5666 4.97045 13.4598 5.09409 13.3968 5.23875C13.3337 5.38341 13.3172 5.54259 13.3493 5.69615C13.3815 5.84972 13.4609 5.99078 13.5774 6.1015C13.6939 6.21222 13.8424 6.28762 14.0041 6.31816C14.1657 6.34871 14.3333 6.33303 14.4856 6.27311C14.6378 6.21319 14.768 6.11172 14.8595 5.98153C14.9511 5.85134 15 5.69828 15 5.54171C15 5.33174 14.9122 5.13038 14.7559 4.98191C14.5996 4.83345 14.3877 4.75004 14.1667 4.75004ZM18.2833 6.52337C18.2695 5.84683 18.1342 5.1775 17.8833 4.54421C17.6506 3.96793 17.293 3.44458 16.8336 3.00813C16.3742 2.57169 15.8233 2.23192 15.2167 2.01087C14.55 1.7725 13.8455 1.64399 13.1333 1.63087C12.325 1.58337 12.0583 1.58337 9.99999 1.58337C7.94166 1.58337 7.67499 1.58337 6.86666 1.63087C6.15451 1.64399 5.44994 1.7725 4.78332 2.01087C4.17671 2.23192 3.62582 2.57169 3.1664 3.00813C2.70699 3.44458 2.34934 3.96793 2.11666 4.54421C1.86574 5.1775 1.73046 5.84683 1.71666 6.52337C1.66666 7.29921 1.66666 7.55254 1.66666 9.50004C1.66666 11.4475 1.66666 11.7009 1.71666 12.4767C1.73046 13.1532 1.86574 13.8226 2.11666 14.4559C2.34934 15.0322 2.70699 15.5555 3.1664 15.9919C3.62582 16.4284 4.17671 16.7682 4.78332 16.9892C5.44994 17.2276 6.15451 17.3561 6.86666 17.3692C7.69999 17.3692 7.94166 17.4167 9.99999 17.4167C12.0583 17.4167 12.325 17.4167 13.1333 17.3692C13.8455 17.3561 14.55 17.2276 15.2167 16.9892C15.8233 16.7682 16.3742 16.4284 16.8336 15.9919C17.293 15.5555 17.6506 15.0322 17.8833 14.4559C18.1342 13.8226 18.2695 13.1532 18.2833 12.4767C18.2833 11.685 18.3333 11.4475 18.3333 9.50004C18.3333 7.55254 18.3333 7.29921 18.2833 6.52337ZM16.6167 12.4055C16.602 12.9079 16.5036 13.4049 16.325 13.878C16.1773 14.2519 15.9439 14.5899 15.6417 14.8675C15.3512 15.1548 14.9947 15.3743 14.6 15.5088C14.1008 15.6854 13.5742 15.7817 13.0417 15.7938C12.2583 15.7938 12.0167 15.8334 9.99166 15.8334C7.96666 15.8334 7.73332 15.8334 6.94999 15.8334C6.41834 15.8203 5.89228 15.7268 5.39166 15.5563C4.99804 15.416 4.64222 15.1942 4.34999 14.9071C4.04762 14.6312 3.81659 14.2925 3.67499 13.9175C3.48983 13.4459 3.38845 12.9483 3.37499 12.445C3.37499 11.6534 3.37499 11.4555 3.37499 9.53962C3.37499 7.62379 3.37499 7.39421 3.37499 6.63421C3.38935 6.1285 3.49069 5.62842 3.67499 5.15379C3.81879 4.78221 4.0496 4.44653 4.34999 4.17212C4.64047 3.88487 4.997 3.66539 5.39166 3.53087C5.89082 3.35425 6.41748 3.25793 6.94999 3.24587C7.73332 3.16671 7.97499 3.16671 9.99999 3.16671C12.025 3.16671 12.2667 3.16671 13.05 3.16671C13.5851 3.17963 14.1144 3.27591 14.6167 3.45171C15.0078 3.58832 15.3611 3.80759 15.65 4.09296C15.9524 4.36891 16.1834 4.70761 16.325 5.08254C16.529 5.56432 16.6446 6.07575 16.6667 6.59462C16.6667 7.38629 16.7083 7.58421 16.7083 9.50004C16.7083 11.4159 16.6667 11.6455 16.6667 12.4055H16.6167Z" fill="black"/>
                        </svg>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M16.5458 1.58337H2.45418C2.22322 1.58337 2.00172 1.67512 1.8384 1.83844C1.67509 2.00175 1.58334 2.22325 1.58334 2.45421V16.5459C1.58334 16.6602 1.60587 16.7735 1.64963 16.8791C1.6934 16.9848 1.75754 17.0808 1.8384 17.1616C1.91927 17.2425 2.01527 17.3067 2.12092 17.3504C2.22658 17.3942 2.33982 17.4167 2.45418 17.4167H10.0383V11.2813H7.98001V8.90629H10.0383V7.12504C9.99571 6.70685 10.0451 6.28439 10.183 5.8873C10.3209 5.49021 10.544 5.1281 10.8367 4.82637C11.1294 4.52463 11.4845 4.29059 11.8772 4.14065C12.27 3.9907 12.6907 3.92849 13.11 3.95837C13.7262 3.95458 14.3421 3.9863 14.9546 4.05337V6.19087H13.6958C12.6983 6.19087 12.5083 6.66587 12.5083 7.35462V8.88254H14.8833L14.5746 11.2575H12.5083V17.4167H16.5458C16.6602 17.4167 16.7734 17.3942 16.8791 17.3504C16.9848 17.3067 17.0808 17.2425 17.1616 17.1616C17.2425 17.0808 17.3066 16.9848 17.3504 16.8791C17.3942 16.7735 17.4167 16.6602 17.4167 16.5459V2.45421C17.4167 2.33985 17.3942 2.22661 17.3504 2.12095C17.3066 2.0153 17.2425 1.9193 17.1616 1.83844C17.0808 1.75757 16.9848 1.69343 16.8791 1.64966C16.7734 1.6059 16.6602 1.58337 16.5458 1.58337Z" fill="black"/>
                    </svg>
                    <MailButton mailto="mailto:kietto3002@gmail.com" />
                </div>
                <p>&copy; {(new Date().getFullYear())}</p>
            </div>
        </div>
    )
};