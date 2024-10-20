import { useState } from 'react';
import Header from '../Header'
import PlantProduct from '../PlantProduct'
import Pagination from '../Pagination';
import './index.css'

import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgInstagram } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImInstagram } from 'react-icons/im';

const Home = props => {
    const {products} = props
    const [currentPage, setCurrentPage] = useState(1);
    const plantsPerPage = 9; 

    const totalPlants = products.length;

    const [searchQuery, setSearchQuery] = useState(''); 

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const query = searchQuery || '';

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastPlant = currentPage * plantsPerPage;
    const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
    const currentPlants = filteredProducts.slice(indexOfFirstPlant, indexOfLastPlant);
  

    return (
        <div className='bg-container'>
            <div className='contact'>
                <p className='shipping'>Free Shipping on order above 999/-</p>
                <p className='phone-no'>Call us on: +91 9876805120</p>
            </div>
            <Header/>
            <div className='search-container'>
                <CiSearch className='search-icon'/>
                <input type='search' placeholder='Search Plant' className='input' value={searchQuery} onChange={handleSearch}/>
                <img src='https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__' alt='search plant' className='search-plant'/>
            </div>
            <div className='buttons-container'>
                <button className='plant-btn'>Plans</button>
                <button className='pot-btn'>Pots</button>
            </div>
            <p className='home-text'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            <h1 className='nursery'>Nursery</h1>
            <div className='images-container'>
                <div className='images'>
                    <img src='https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__' alt='plant image' className='plant-img'/>
                    <p className='descp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
                <div className='images'>
                    <img src='https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__' alt='plant image' className='plant-img'/>
                    <p className='descp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
                <div className='images'>
                    <img src='https://s3-alpha-sig.figma.com/img/30e4/bd2a/6b210bc07ae9706bbb2921a7a22ae2d8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDqrVNFwt4JzcyAYDai8WBIsJ8~x8SSddecc5JzGY6MlDBnAToPpk~pl0iTDOXAdRPXQuRsfHeH-EiH5nOdJBd1MrCIpn7o7dpjQ4As8uPg-6kZtK24SLABA1dixPDhyaDd0J~Ah6cGGTSVYqcJBYQnaQ-xaEDYUoxlFDyUgJEW~D8nlhECKXx8yblqiSb6GeyBb9dMTzTP4coxAJnM~CakmgtT8dBv40VRxY4Jm4IqxYyP4oZYrd3-86kB1uLIPZ0gNNOAe9CjoHf8PM~cqDv-HleBmGdNyzuXGTbHlCjf5sHI3HZVac~0mOWokX3zT8CTDV1AkM7cHe~n4JUVKhw__' alt='plant image' className='plant-img'/>
                    <p className='descp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
                <div className='images'>
                    <img src='https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__' alt='plant image' className='plant-img'/>
                    <p className='descp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
                <div className='images'>
                    <img src='https://s3-alpha-sig.figma.com/img/2270/0766/ed50532940537d9d39d2626bb7a95167?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1u59mBoYOHSu1vnubFHYBlgxelj9I23c0h6FVJu8fe99v6vjeEdd6UOgf5HTHto7xa-16CN1hOLofpqppNDJz2Oxg1tf484NGDPRM6lKLxCAZ94vesYIDXG~EjlY0mXxC0qLyFyzX4~ntpqmYvlbRUFu32C4Pr3e9DHL6To3K2q54-FoFL4hobrTij7oIpGHfxKj4eMB6q2xHjXlvJZkXmQ3Tk7snP0197a8V3CO1XvygFiFYLckqUOzhSQ0JP~4BzrS~rcb84Rbtx8Zc77A4AHVH6ZU-wr9omI~Uc8jTCmEU~A6x~78h0RCTr~cd1EsqQnDTuc-v-d7Cql-7Ytdg__' alt='plant image' className='plant-img'/>
                    <p className='descp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
                <div className='images'>
                    <img src='https://s3-alpha-sig.figma.com/img/279e/3d50/4fa5aaae113083a0db504c05b0632860?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0EGVWoDEQUwjx~hnB0USRsU7reHwOw6193w9u8swslxPzKI2ddB68xXahlNiWBgb6QR1DKlu2tCi9~c0~2ZjR0uWly5Vcx7~JK4ey05Oo-h7lhION9Fh4j7HB0P53BMtKvM9RrM0~-7HC~5J~MLQqaXfWRrwt1Uc15Q9WhsKhnLCBp7FO60nEePDTwtWZaVrVOv4TBhl~y25LIPF1aiqzO~GeiwsGJMJprtqx9084RytbMRxZPLTBrUSLXU7AC5zSjCM~2eivRKOiquEQBUkT2Dm59cKGZm6LHfdtKW9XFzM1ZjO4rVPawK~iu8yAGplOZ5YujxmRiWzdzGsm4yJA__' alt='plant image' className='plant-img'/>
                    <p className='descp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
                </div>
            </div>
            <div className='container'>
            <div className='filter-container'>
                    <div className='filter-cont'>
                    <p className='filter'>Filter</p>
                    <p className='filter'>CLEAR ALL</p>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Types of Plants</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Price</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Nursery</p> 
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Ideal Plants Location</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Indoor / Outdoor</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Maintenance</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Plant Size</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Water Schedule</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Color</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Seasonal</p>
                    <FaPlus className='plus'/>
                    </div>
                    <hr className='hr-line'/>
                    <div className='filter-cont'>
                    <p className='filter'>Light Efficient</p>
                    <FaPlus className='plus'/>
                    </div>
                </div>
                <div className='products-container'>
                    <div className='sort-container'>
                        <p className='filter'>100 Products</p>
                        <button className='sort'>SORT BY<RiArrowDropDownLine className='drop'/></button>
                    </div>
                    <ul className='plants-list'>
                        {currentPlants.map((each) => (
                            <PlantProduct key={each.id} details={each}/>
                        ))}
                    </ul>
                </div>
            </div>
                <Pagination
                totalPlants={totalPlants}
                plantsPerPage={plantsPerPage}
                onPageChange={handlePageChange}
            />
            <div className='footer-section'>
                <div className='footer-container'>
                    <div className='rows'>
                        <h1 className='black'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        <p className='text'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                        <input type='search' placeholder='Enter your Email address' className='email'/>
                        <div>
                        <button className='button'>Subscribe</button>
                        </div>
                    </div>
                    <div className='rows'>
                        <h1 className='black'>ABOUT US</h1>
                        <p className='text'>Our Story</p>
                        <p className='text'>Blogs</p>
                        <p className='text'>Careers</p>
                        <p className='text'>Contack Us</p>
                        <p className='text'>Help & Support</p>
                    </div>
                    <div className='rows'>
                        <h1 className='black'>OUR SERVICES</h1>
                        <p className='text'>Book Maali</p>
                        <p className='text'>Plant Day Care</p>
                        <p className='text'>Rent Plants</p>
                        <p className='text'>Plants & Pots</p>
                        <p className='text'>Gardening Tools</p>
                    </div>
                    <div className='rows'>
                        <h1 className='black'>USEFUL LINKS</h1>
                        <p className='text'>My Account</p>
                        <p className='text'>Orders & Returns</p>
                        <p className='text'>Track Order</p>
                        <p className='text'>Terms & Conditions</p>
                        <p className='text'>Privacy Policy</p>
                        <p className='text'>Return, Refund & Replacement Policy</p>
                    </div>
                    <div className='rows'>
                        <h1 className='black'>GET IN TOUCH</h1>
                        <p className='text'>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003

                            Call:
                            +919958287272

                            Email: care@chaperoneplants.com</p>
                    </div>
                </div>
                <h1 className='nursery'>CHAPERONE</h1>
                <p className='text'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                <h1 className='nursery'>Follow us on</h1>
                <div className='follow'>
                    <CgInstagram className='follow-icon'/>
                    <FaFacebook className='follow-icon'/>
                    <FaSquareThreads className='follow-icon'/>
                    <FaYoutube className='follow-icon'/>
                    <FaLinkedin className='follow-icon'/>
                </div>
                <hr/>
                <p className='rights'>© 2023, chaperone.com All rights reserved.</p>
            </div>
        </div>
)

}

export default Home