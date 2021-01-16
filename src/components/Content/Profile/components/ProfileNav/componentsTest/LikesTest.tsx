import React, { FC } from "react"
import { postNavSvg } from "../../../../../News/News"
import styles from "./like.module.css"

export const LikesTest: FC = () => {
  return (
    <section className={styles.news}>
      <div className={styles.newsWrapper}>
        <div className={styles.postWrapper}>
          <h2 className="digital">Likes Test</h2>
          <p className={styles.digitalItem}>
            Lorem LikesTest ipsum dolor sit amet consectetur, adipisicing elit. Numquam cupiditate,
            unde porro alias voluptatum nesciunt soluta architecto facere totam expedita cumque
            illum fuga dolor officia dolorem itaque? Quisquam maiores corrupti possimus repudiandae?
            Ut, suscipit pariatur blanditiis dignissimos necessitatibus quas molestiae quos
            obcaecati esse excepturi consequatur maiores tenetur dolorum assumenda numquam atque
            voluptatibus qui itaque velit recusandae sunt commodi tempora odio? Harum quisquam, quas
            dolore nemo id ex corporis consectetur ullam et sed dignissimos laudantium nobis nostrum
            nesciunt. Iure animi, quidem dicta aperiam quos eveniet dolore fugiat similique earum
            eaque id voluptatibus possimus iusto assumenda perspiciatis optio dolorum dolorem libero
            ab maiores harum rerum? Tempora incidunt dolorum voluptatem dolores excepturi iste ipsam
            nemo inventore numquam tenetur non id perferendis voluptatum impedit fugiat fuga minus,
            porro nam totam error ex sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto alias perferendis odio ratione. Fuga quibusdam officiis asperiores, numquam dicta
            expedita consectetur nobis amet obcaecati nesciunt soluta, non placeat rerum? Odit sint
            labore eligendi vero sunt et sequi modi, quisquam, esse voluptatibus accusantium quae
            exercitationem? Quae modi eum animi doloremque et assumenda vero similique facilis amet
            fugiat tempore quisquam doloribus atque nemo veniam accusamus obcaecati repellat id,
            numquam pariatur soluta voluptatibus! Nesciunt architecto velit, animi facere magni
            repudiandae deserunt fugit eum provident possimus. Necessitatibus minus est sequi
            blanditiis odio natus numquam dignissimos ratione asperiores repellendus, laudantium,
            quia iure repudiandae magni maxime.
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
