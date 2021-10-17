import styles from './Details.module.css';


function Details({
    match
}) {
    console.log(match);
    return (
        <article className={styles.details_container}>
            <div className={styles.details_head_container}>
                <h3>BMW i4</h3>
            </div>
            <div className={styles.img_container}>
                <img src="https://www.bmw.bg/content/dam/bmw/common/home/teaser/bmw-i4-m50-hometeaser-1680x756.jpg.asset.1626103867175.jpg" alt="Avatar" />
            </div>
            <div className={styles.specification_details_container} >
                <h2>SPECIFICATIONS</h2>
                <ul>
                    <li><i class="fas fa-car"></i><p>Model</p><p>BMW</p></li>
                    <li><i class="fas fa-users"></i><p>Number of seats</p><p>4</p></li>
                    <li><i class="fas fa-gas-pump"></i><p>Fuel</p><p>Disel</p>  </li>
                    <li><i class="fas fa-suitcase"></i><p>Luggage</p><p>3</p></li>
                    <li><i class="fas fa-cogs"></i><p>Transmition</p><p>Automatic</p></li>

                </ul>
                
            </div>
            <div>
                <p>Price: 150€</p>
            </div>
            
            <div className={styles.detailsbtn_container}>
                <button className={styles.rentbtn}>Rent</button>
                <button className={styles.backbtn}>Back</button>
                <section className={styles.details_owner_button}>
                    <button className={styles.deletebtn}>Delete</button>
                </section>
            </div>
        </article>
    )
}

export default Details
