
import { IconBrandInstagram, IconCamera } from "@tabler/icons-react"
import styles from "@/app/styles/footer.module.css";
import Image from "next/image"

const Footer = () => {

    return (

        <>
            <div className={styles.footer}>

                <div className={styles.footerContent}>

                    <div className={styles.footerTop}>

                        <div className={styles.topLeftSide}>
                            <h3>BE THE FIRST TO KNOW</h3>
                            <p>Sign up for updates from mettā muse.</p>

                            <div className={styles.inputButton}>
                                <input type="text" placeholder="Enter your e-mail..." />
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>

                        <hr className={styles.lineFooter} />

                        <div className={styles.topRightSide}>

                            <div className={styles.rightSideContent}>

                                <div className={styles.contactUs}>
                                    <h3>CONTACT US</h3>
                                    <p>+44 221 133 5360</p>
                                    <p>customercare@mettamuse.com</p>
                                </div>

                                <hr className={styles.lineFooter} />

                                <div className={styles.currency}>

                                    <h3>CURRENCY</h3>
                                    <div className={styles.usdImageDiv}>
                                        <Image src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" height={30} width={30} />
                                        <h4>+ USD</h4>
                                    </div>

                                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                                </div>


                            </div>
                        </div>


                    </div>

                    <hr className={styles.horizontalLineFooter} />

                    <div className={styles.footerBottom}>

                        <div className={styles.bottomLeft}>
                            <h3>mettā muse</h3>

                            <div className={styles.bottomLeftContents}>
                                <p>About Us</p>
                                <p>Stories</p>
                                <p>Artisans</p>
                                <p>Contact Us</p>
                                <p>EU Compliances Docs</p>
                            </div>
                        </div>

                        <hr className={styles.lineFooter} />


                        <div className={styles.bottomCenter}>

                            <h3>QUICK LINKS</h3>

                            <div className={styles.bottomCenterContents}>
                                <p>Orders & Shipping</p>
                                <p>Join/Login as a Seller</p>
                                <p>Payment & Pricing</p>
                                <p>Return & Refunds</p>
                                <p>FAQs</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>

                        </div>

                        <hr className={styles.lineFooter} />

                        <div className={styles.bottomRight}>

                            <h3>FOLLOW US</h3>

                            <div className={styles.socialMedia}>
                                <div className={styles.social}>
                                    <IconCamera />
                                </div>
                                <div className={styles.social}>
                                    <IconBrandInstagram />
                                </div>

                            </div>

                            <div className={styles.paymentDiv}>
                                <h3>mettā muse Accepts</h3>

                                <div className={styles.paymentMethods}>

                                </div>

                            </div>


                        </div>

                    </div>

                    <div className={styles.copyright}>
                        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                    </div>

                </div>

            </div>
        </>
    )

}

export default Footer