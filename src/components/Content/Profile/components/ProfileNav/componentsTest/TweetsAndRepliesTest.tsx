import React, { FC } from "react"
import { postNavSvg } from "../../../../../News/News"
import styles from "./tweetAndReplies.module.css"

export const TweetsAndRepliesTest: FC = () => {
  return (
    <section className={styles.news}>
      <div className={styles.newsWrapper}>
        <div className={styles.postWrapper}>
          <h2 className="digital">Tweets And Replies Test</h2>
          <p className={styles.digitalItem}>
            Lorem TweetsAndRepliesTest ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            cupiditate, unde porro alias voluptatum nesciunt soluta architecto facere totam expedita
            cumque illum fuga dolor officia dolorem itaque? Quisquam maiores corrupti possimus
            repudiandae? Ut, suscipit pariatur blanditiis dignissimos necessitatibus quas molestiae
            quos obcaecati esse excepturi consequatur maiores tenetur dolorum assumenda numquam
            atque voluptatibus qui itaque velit recusandae sunt commodi tempora odio? Harum
            quisquam, quas dolore nemo id ex corporis consectetur ullam et sed dignissimos
            laudantium nobis nostrum nesciunt. Iure animi, quidem dicta aperiam quos eveniet dolore
            fugiat similique earum eaque id voluptatibus possimus iusto assumenda perspiciatis optio
            dolorum dolorem libero ab maiores harum rerum? Tempora incidunt dolorum voluptatem
            dolores excepturi iste ipsam nemo inventore numquam tenetur non id perferendis
            voluptatum impedit fugiat fuga minus, porro nam totam error ex sequi? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nemo tempora eius distinctio temporibus a vitae
            fuga, sit ipsa, animi eos obcaecati impedit nobis autem voluptatum? Veritatis magni
            ducimus accusantium, quisquam sequi repellendus? Ullam blanditiis deleniti, nulla
            temporibus corrupti mollitia optio at inventore cupiditate perspiciatis nemo, eos
            consequuntur hic, soluta repellendus libero doloribus aliquam. Eaque aperiam
            necessitatibus velit molestiae id, aut beatae. Sint corporis debitis possimus nobis
            nulla eos quas rem veritatis ducimus? Illum sequi nobis provident quaerat minima cumque
            enim exercitationem, ullam corrupti veritatis, delectus, modi dolore vel quia beatae
            quod aliquid repellat ipsum libero. Sapiente, ab sed! Aperiam error voluptatibus quis
            doloribus aliquid veniam nemo cumque eum excepturi voluptatum veritatis, esse doloremque
            ea earum, molestias tempora magnam. Expedita temporibus in placeat quisquam facilis
            magni facere maxime, possimus reiciendis, aperiam necessitatibus corrupti autem quam vel
            ea et provident, incidunt repellendus voluptatibus laboriosam tenetur hic officiis
            consectetur! Laborum cum ab alias ratione iure inventore, dolores magni quisquam
            exercitationem similique sequi repellat consectetur reiciendis eveniet voluptatibus in
            ipsam soluta vel sed id repellendus rerum possimus. Commodi, temporibus accusantium.
            Nisi id itaque, tempora impedit, harum accusantium vitae expedita voluptatibus officia
            mollitia ab illo odit praesentium tempore temporibus eveniet repudiandae! Natus quisquam
            explicabo modi.
          </p>
          <p className={styles.digitalItem}>designnominees.com</p>
        </div>
        <nav>
          <ul className={styles.postNav}>
            {postNavSvg.map((item, index) => (
              <li key={index}>
                <img src={item} alt={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
