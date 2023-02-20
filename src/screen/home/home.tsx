import React from 'react';
import Image from "next/image";
import styles from "src/screen/home/styles.module.scss"
import back from "public/assets/image/background.png"


export default function Home() {
    return(
        <div className={styles.background}>
           
           <Image
        src={back}
        fill
        alt="메인 배경 이미지"
        
      />
        </div>
    )
}