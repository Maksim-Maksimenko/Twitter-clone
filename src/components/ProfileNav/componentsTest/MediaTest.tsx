import React, { FC } from 'react'
import { postNavSvg } from '../../News/News'
import styles from './media.module.css'

export const MediaTest: FC = () => {
  return (
    <section className={styles.news}>
      <div className={styles.newsWrapper}>
        <div className={styles.postWrapper}>
          <h2 className="digital">Media Test</h2>
          <p className={styles.digitalItem}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cupiditate, unde porro
            alias voluptatum nesciunt soluta architecto facere totam expedita cumque illum fuga
            dolor officia dolorem itaque? Quisquam maiores corrupti possimus repudiandae? Ut,
            suscipit pariatur blanditiis dignissimos necessitatibus quas molestiae quos obcaecati
            esse excepturi consequatur maiores tenetur dolorum assumenda numquam atque voluptatibus
            qui itaque velit recusandae sunt commodi tempora odio? Harum quisquam, quas dolore nemo
            id ex corporis consectetur ullam et sed dignissimos laudantium nobis nostrum nesciunt.
            Iure animi, quidem dicta aperiam quos eveniet dolore fugiat similique earum eaque id
            voluptatibus possimus iusto assumenda perspiciatis optio dolorum dolorem libero ab
            maiores harum rerum? Tempora incidunt dolorum voluptatem dolores excepturi iste ipsam
            nemo inventore numquam tenetur non id perferendis voluptatum impedit fugiat fuga minus,
            porro nam totam error ex sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, placeat quam ut enim laudantium earum quae similique eligendi dolore, quis,
            deserunt animi veritatis saepe vero error culpa expedita asperiores pariatur! Doloribus
            quia accusamus tenetur! Odit quaerat, in natus qui harum expedita dignissimos tempora,
            iure optio, tempore minus soluta? Nam eligendi atque omnis, tempora at nesciunt commodi
            dolore consequuntur eum assumenda, in velit, porro praesentium ut autem. Provident fuga,
            esse quaerat aut iure similique repudiandae non illo perferendis voluptates sed vel
            perspiciatis. Hic praesentium maxime eum obcaecati nisi odit eos, assumenda velit.
            Repudiandae magnam dignissimos autem eos odit a commodi, enim vel voluptatem quidem
            accusantium quisquam quo officia cumque cum eaque nihil rerum nostrum expedita dolorum
            eveniet modi. Illo ad natus molestias porro corrupti sapiente minus soluta officia
            dolorum deserunt animi autem commodi, ipsum non atque possimus quod nesciunt quia
            veritatis esse quasi alias exercitationem est accusamus. Sequi beatae iste corporis?
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
