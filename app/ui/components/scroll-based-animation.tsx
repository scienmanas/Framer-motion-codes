"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollBasedAnimation(): JSX.Element {
  // For scrollable div need to fix it to the div for bar
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // For spring for animation
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    ["rgb(8,1,245)", "rgb(1, 25, 13)", "rgb(1, 245, 13)"]
  );

  return (
    <section className="scroll-based-animation flex flex-col items-center justify-center">
      <motion.div
        style={{
          //   scaleX: scrollYProgress,
          scaleX,
          //   background: "blue",
          background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      />
      <div
        ref={scrollRef}
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "1.2rem",
        }}
        className="flex flex-col gap-4"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, quos assumenda. Odio officia vero modi, at, nam
          pariatur eius repellendus quia laudantium quibusdam corporis possimus,
          ipsam cupiditate mollitia corrupti autem nostrum magni. Repellendus
          odit aut provident? Aut, aliquid hic sapiente ut dolore tempora,
          minima, sit explicabo ratione adipisci ipsum iste autem omnis!
          Dignissimos, natus nemo nam ipsum velit commodi incidunt voluptas
          ratione officia iure quae impedit est fuga placeat culpa recusandae
          vero libero. Perferendis voluptatum possimus exercitationem debitis
          cum officiis delectus voluptate magni excepturi commodi consectetur
          facilis provident eum ipsum necessitatibus aut minus, a aperiam saepe.
          Nobis atque ipsum incidunt dolor eius necessitatibus iste dignissimos
          ad distinctio reprehenderit sapiente, maxime, nam, aspernatur veniam
          dolorem aliquam cupiditate rerum exercitationem ullam possimus omnis?
          Optio, rem ex deserunt aperiam id aspernatur nisi vitae! Fuga ipsam
          consequatur, earum provident nam minus amet corrupti voluptatibus rem,
          molestiae ducimus quae! Laborum accusamus impedit delectus minima vero
          explicabo nam nulla voluptate natus ea sed, doloremque, ipsum
          voluptatem unde ut quo beatae amet magnam veniam adipisci hic.
          Delectus suscipit, id voluptatibus sint ducimus saepe tempora qui
          distinctio nulla reprehenderit deserunt. Repellat eos, veniam autem,
          excepturi inventore earum recusandae deleniti culpa illum cumque
          consequatur quas suscipit labore corporis quo quia doloribus in
          accusantium! Minus accusantium beatae assumenda aperiam perspiciatis
          similique pariatur quia in quam nulla! Delectus voluptatum veniam,
          minima quisquam doloremque voluptas nisi vero expedita, ad aut
          provident, incidunt iusto. Esse, nihil quibusdam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, quos assumenda. Odio officia vero modi, at, nam
          pariatur eius repellendus quia laudantium quibusdam corporis possimus,
          ipsam cupiditate mollitia corrupti autem nostrum magni. Repellendus
          odit aut provident? Aut, aliquid hic sapiente ut dolore tempora,
          minima, sit explicabo ratione adipisci ipsum iste autem omnis!
          Dignissimos, natus nemo nam ipsum velit commodi incidunt voluptas
          ratione officia iure quae impedit est fuga placeat culpa recusandae
          vero libero. Perferendis voluptatum possimus exercitationem debitis
          cum officiis delectus voluptate magni excepturi commodi consectetur
          facilis provident eum ipsum necessitatibus aut minus, a aperiam saepe.
          Nobis atque ipsum incidunt dolor eius necessitatibus iste dignissimos
          ad distinctio reprehenderit sapiente, maxime, nam, aspernatur veniam
          dolorem aliquam cupiditate rerum exercitationem ullam possimus omnis?
          Optio, rem ex deserunt aperiam id aspernatur nisi vitae! Fuga ipsam
          consequatur, earum provident nam minus amet corrupti voluptatibus rem,
          molestiae ducimus quae! Laborum accusamus impedit delectus minima vero
          explicabo nam nulla voluptate natus ea sed, doloremque, ipsum
          voluptatem unde ut quo beatae amet magnam veniam adipisci hic.
          Delectus suscipit, id voluptatibus sint ducimus saepe tempora qui
          distinctio nulla reprehenderit deserunt. Repellat eos, veniam autem,
          excepturi inventore earum recusandae deleniti culpa illum cumque
          consequatur quas suscipit labore corporis quo quia doloribus in
          accusantium! Minus accusantium beatae assumenda aperiam perspiciatis
          similique pariatur quia in quam nulla! Delectus voluptatum veniam,
          minima quisquam doloremque voluptas nisi vero expedita, ad aut
          provident, incidunt iusto. Esse, nihil quibusdam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, quos assumenda. Odio officia vero modi, at, nam
          pariatur eius repellendus quia laudantium quibusdam corporis possimus,
          ipsam cupiditate mollitia corrupti autem nostrum magni. Repellendus
          odit aut provident? Aut, aliquid hic sapiente ut dolore tempora,
          minima, sit explicabo ratione adipisci ipsum iste autem omnis!
          Dignissimos, natus nemo nam ipsum velit commodi incidunt voluptas
          ratione officia iure quae impedit est fuga placeat culpa recusandae
          vero libero. Perferendis voluptatum possimus exercitationem debitis
          cum officiis delectus voluptate magni excepturi commodi consectetur
          facilis provident eum ipsum necessitatibus aut minus, a aperiam saepe.
          Nobis atque ipsum incidunt dolor eius necessitatibus iste dignissimos
          ad distinctio reprehenderit sapiente, maxime, nam, aspernatur veniam
          dolorem aliquam cupiditate rerum exercitationem ullam possimus omnis?
          Optio, rem ex deserunt aperiam id aspernatur nisi vitae! Fuga ipsam
          consequatur, earum provident nam minus amet corrupti voluptatibus rem,
          molestiae ducimus quae! Laborum accusamus impedit delectus minima vero
          explicabo nam nulla voluptate natus ea sed, doloremque, ipsum
          voluptatem unde ut quo beatae amet magnam veniam adipisci hic.
          Delectus suscipit, id voluptatibus sint ducimus saepe tempora qui
          distinctio nulla reprehenderit deserunt. Repellat eos, veniam autem,
          excepturi inventore earum recusandae deleniti culpa illum cumque
          consequatur quas suscipit labore corporis quo quia doloribus in
          accusantium! Minus accusantium beatae assumenda aperiam perspiciatis
          similique pariatur quia in quam nulla! Delectus voluptatum veniam,
          minima quisquam doloremque voluptas nisi vero expedita, ad aut
          provident, incidunt iusto. Esse, nihil quibusdam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, quos assumenda. Odio officia vero modi, at, nam
          pariatur eius repellendus quia laudantium quibusdam corporis possimus,
          ipsam cupiditate mollitia corrupti autem nostrum magni. Repellendus
          odit aut provident? Aut, aliquid hic sapiente ut dolore tempora,
          minima, sit explicabo ratione adipisci ipsum iste autem omnis!
          Dignissimos, natus nemo nam ipsum velit commodi incidunt voluptas
          ratione officia iure quae impedit est fuga placeat culpa recusandae
          vero libero. Perferendis voluptatum possimus exercitationem debitis
          cum officiis delectus voluptate magni excepturi commodi consectetur
          facilis provident eum ipsum necessitatibus aut minus, a aperiam saepe.
          Nobis atque ipsum incidunt dolor eius necessitatibus iste dignissimos
          ad distinctio reprehenderit sapiente, maxime, nam, aspernatur veniam
          dolorem aliquam cupiditate rerum exercitationem ullam possimus omnis?
          Optio, rem ex deserunt aperiam id aspernatur nisi vitae! Fuga ipsam
          consequatur, earum provident nam minus amet corrupti voluptatibus rem,
          molestiae ducimus quae! Laborum accusamus impedit delectus minima vero
          explicabo nam nulla voluptate natus ea sed, doloremque, ipsum
          voluptatem unde ut quo beatae amet magnam veniam adipisci hic.
          Delectus suscipit, id voluptatibus sint ducimus saepe tempora qui
          distinctio nulla reprehenderit deserunt. Repellat eos, veniam autem,
          excepturi inventore earum recusandae deleniti culpa illum cumque
          consequatur quas suscipit labore corporis quo quia doloribus in
          accusantium! Minus accusantium beatae assumenda aperiam perspiciatis
          similique pariatur quia in quam nulla! Delectus voluptatum veniam,
          minima quisquam doloremque voluptas nisi vero expedita, ad aut
          provident, incidunt iusto. Esse, nihil quibusdam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, quos assumenda. Odio officia vero modi, at, nam
          pariatur eius repellendus quia laudantium quibusdam corporis possimus,
          ipsam cupiditate mollitia corrupti autem nostrum magni. Repellendus
          odit aut provident? Aut, aliquid hic sapiente ut dolore tempora,
          minima, sit explicabo ratione adipisci ipsum iste autem omnis!
          Dignissimos, natus nemo nam ipsum velit commodi incidunt voluptas
          ratione officia iure quae impedit est fuga placeat culpa recusandae
          vero libero. Perferendis voluptatum possimus exercitationem debitis
          cum officiis delectus voluptate magni excepturi commodi consectetur
          facilis provident eum ipsum necessitatibus aut minus, a aperiam saepe.
          Nobis atque ipsum incidunt dolor eius necessitatibus iste dignissimos
          ad distinctio reprehenderit sapiente, maxime, nam, aspernatur veniam
          dolorem aliquam cupiditate rerum exercitationem ullam possimus omnis?
          Optio, rem ex deserunt aperiam id aspernatur nisi vitae! Fuga ipsam
          consequatur, earum provident nam minus amet corrupti voluptatibus rem,
          molestiae ducimus quae! Laborum accusamus impedit delectus minima vero
          explicabo nam nulla voluptate natus ea sed, doloremque, ipsum
          voluptatem unde ut quo beatae amet magnam veniam adipisci hic.
          Delectus suscipit, id voluptatibus sint ducimus saepe tempora qui
          distinctio nulla reprehenderit deserunt. Repellat eos, veniam autem,
          excepturi inventore earum recusandae deleniti culpa illum cumque
          consequatur quas suscipit labore corporis quo quia doloribus in
          accusantium! Minus accusantium beatae assumenda aperiam perspiciatis
          similique pariatur quia in quam nulla! Delectus voluptatum veniam,
          minima quisquam doloremque voluptas nisi vero expedita, ad aut
          provident, incidunt iusto. Esse, nihil quibusdam?
        </p>
      </div>
    </section>
  );
}
