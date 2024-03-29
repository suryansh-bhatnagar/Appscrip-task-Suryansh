"use client";
import { IconArrowLeft, IconArrowRight, IconCheck, IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronsDown, IconDirection, IconHeart } from '@tabler/icons-react';
import styles from '@/app/styles/home.module.css'
import { useState } from "react";
import React from 'react'
import Image from 'next/image';
export default function Home() {

    const [isVisible, setIsVisible] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const toggleVisibility = () => {
        console.log('Toggling visibility');
        setIsVisible(!isVisible);
    };


    const toggleBox = () => {
        setIsBoxVisible(!isBoxVisible);
    };



    return (
        <>

<div className={styles.mainBody}>
    <div className={styles.bodyContent}>

        <div className={styles.bodyContentHead}>
            <hr className={styles.lineHr}/>
            <div className={styles.filterRecommendedDiv}>

                <div className={styles.filterRecommended}>

                    <div className={styles.filterDiv}>
                        <p>3425 ITEMS</p>

                        {
                            isVisible ? (
                                <div className={styles.showFilter} onClick={toggleVisibility}> <IconChevronLeft /> <a>HIDE FILTER</a></div>
                            ) :

                            (
                                <div className={styles.showFilter} onClick={toggleVisibility}> <IconChevronRight /> <a>SHOW FILTER</a></div>
                            )
                        }

                        <div className={styles.filterMobile}> <a>FILTER</a></div>

                    </div>

                    <div className={styles.verticalLineFilterRecommended}>

                    </div>

                    <div className={styles.recommendedPDiv}><p className={styles.recommendedP} onClick={toggleBox}>RECOMMENDED</p> <IconChevronDown /></div>

                </div>
            </div>
            <hr className={styles.lineHr} />
        </div>



        <div className={isVisible ? styles.mainBodyContents : styles.hideFilterMainBodyContents}>

            {
                isBoxVisible &&
                <div className={isVisible ? styles.box : styles.boxChange}>
                    <div className={styles.recommendedBox}> <IconCheck /> <p>RECOMMENDED</p></div>
                    <p>NEWEST FIRST</p>
                    <p>POPULAR</p>
                    <p>PRICE : HIGH TO LOW</p>
                    <p>PRICE : LOW TO HIGH</p>
                </div>
            }

            <div className={styles.productListDiv}>

            <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productImage}>
            <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" height={500} width={500} />
          </div>

          <div className={styles.productBottom}>
            <div className={styles.productDetails}>
              <p className={styles.productName}>PPXOC MILKEYWAY DRESS IN..</p>
              <p className={styles.productDescription}><a>Sign in</a> or Create an account to see pricing</p>
            </div>
            <div className={styles.icon}>
              <IconHeart />
            </div>
          </div>
        </div>


            </div>
        </div>
    </div>
</div>


        </>
    )
}

