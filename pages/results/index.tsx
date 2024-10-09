import { useState } from "react";

export default function Result() {
  const [play, setPlay] = useState<boolean>(false);

  return (
    <>
      <main>
        <div>
          {!play ? (
            <button
              onClick={() => {
                setPlay(true);
              }}
            >
              Show Result
            </button>
          ) : (
            <>
              {" "}
              <div className="text-container">
                <div className="text-wrapper">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas viverra dui vel fringilla. Nulla nec nibh vel
                    arcu aliquam mollis. Morbi vitae tortor diam. Etiam at
                    feugiat ligula, vel ornare risus. Curabitur libero mi,
                    congue sed enim at, ultricies pulvinar ipsum. Aliquam
                    bibendum ultrices lectus id finibus. Morbi maximus massa
                    fermentum scelerisque feugiat. Ut non pretium neque. Integer
                    consectetur vehicula facilisis. Nulla id ante mattis ipsum
                    porta porttitor sed id metus. Donec mattis pellentesque
                    eleifend. Suspendisse ac porttitor erat. Morbi vestibulum ut
                    felis at viverra. Nulla tristique blandit sem sed posuere.
                    Curabitur in nisl quis augue condimentum vehicula. Integer
                    vulputate enim velit, sit amet cursus arcu efficitur nec.
                    Nam sed finibus sapien, quis vulputate purus. Phasellus nec
                    massa eleifend, accumsan dolor quis, feugiat ante. Sed
                    hendrerit rhoncus turpis et lacinia. Nam tincidunt dignissim
                    viverra. Curabitur at dui justo. Nulla aliquet velit nibh,
                    ut eleifend ligula pretium eu. Curabitur imperdiet
                    pellentesque libero quis suscipit. Etiam semper tempus
                    magna, at lobortis libero rutrum non. Pellentesque porta
                    libero a felis interdum suscipit. Proin lobortis, mauris ut
                    cursus cursus, nibh ligula ornare erat, nec consectetur erat
                    metus at dolor. Nulla efficitur aliquam eros quis interdum.
                    Duis finibus sagittis dui, non pellentesque ligula. Etiam
                    mattis est et lectus tincidunt, at pellentesque ipsum
                    pulvinar. Vivamus imperdiet non nibh non maximus. Phasellus
                    imperdiet elit lectus, sed varius eros mollis a. Duis
                    vulputate dignissim dui, id lobortis mi malesuada ac.
                    Praesent metus arcu, lacinia nec nunc eget, porta congue
                    ipsum. Vestibulum in maximus tellus, at egestas augue. Duis
                    fermentum turpis ac nibh tristique, a rutrum nisi convallis.
                    Proin eleifend felis lacus, in molestie leo fermentum vitae.
                    Sed id quam scelerisque, interdum libero id, tristique ex.
                    Quisque a odio blandit, maximus neque at, tristique diam.
                    Integer nec commodo lorem. Nam convallis risus dolor, non
                    tristique ante condimentum vel. Proin ut odio metus. Integer
                    aliquet lectus elit, ut consectetur nisl mollis eget.
                    Curabitur efficitur turpis at nulla viverra, eu aliquam elit
                    pulvinar. Nunc vitae ex mi. Sed tristique fringilla justo
                    vitae lacinia. Sed condimentum ullamcorper dignissim. Aenean
                    ligula arcu, convallis et dictum quis, faucibus vitae
                    libero. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Aliquam consequat risus quis enim laoreet, quis
                    pulvinar leo volutpat. In convallis dictum nisl, at
                    porttitor leo elementum at. Pellentesque a eleifend neque.
                    Donec sed ligula vitae lectus pharetra vestibulum. Etiam
                    vehicula, diam a vestibulum dignissim, libero massa dictum
                    neque, et pulvinar sem ex vel tellus. Proin a libero
                    sollicitudin, efficitur dolor eget, vestibulum neque. Proin
                    semper semper ligula. Aliquam erat volutpat. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos.
                  </p>
                </div>
                <div className="text-wrapper">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas viverra dui vel fringilla. Nulla nec nibh vel
                    arcu aliquam mollis. Morbi vitae tortor diam. Etiam at
                    feugiat ligula, vel ornare risus. Curabitur libero mi,
                    congue sed enim at, ultricies pulvinar ipsum. Aliquam
                    bibendum ultrices lectus id finibus. Morbi maximus massa
                    fermentum scelerisque feugiat. Ut non pretium neque. Integer
                    consectetur vehicula facilisis. Nulla id ante mattis ipsum
                    porta porttitor sed id metus. Donec mattis pellentesque
                    eleifend. Suspendisse ac porttitor erat. Morbi vestibulum ut
                    felis at viverra. Nulla tristique blandit sem sed posuere.
                    Curabitur in nisl quis augue condimentum vehicula. Integer
                    vulputate enim velit, sit amet cursus arcu efficitur nec.
                    Nam sed finibus sapien, quis vulputate purus. Phasellus nec
                    massa eleifend, accumsan dolor quis, feugiat ante. Sed
                    hendrerit rhoncus turpis et lacinia. Nam tincidunt dignissim
                    viverra. Curabitur at dui justo. Nulla aliquet velit nibh,
                    ut eleifend ligula pretium eu. Curabitur imperdiet
                    pellentesque libero quis suscipit. Etiam semper tempus
                    magna, at lobortis libero rutrum non. Pellentesque porta
                    libero a felis interdum suscipit. Proin lobortis, mauris ut
                    cursus cursus, nibh ligula ornare erat, nec consectetur erat
                    metus at dolor. Nulla efficitur aliquam eros quis interdum.
                    Duis finibus sagittis dui, non pellentesque ligula. Etiam
                    mattis est et lectus tincidunt, at pellentesque ipsum
                    pulvinar. Vivamus imperdiet non nibh non maximus. Phasellus
                    imperdiet elit lectus, sed varius eros mollis a. Duis
                    vulputate dignissim dui, id lobortis mi malesuada ac.
                    Praesent metus arcu, lacinia nec nunc eget, porta congue
                    ipsum. Vestibulum in maximus tellus, at egestas augue. Duis
                    fermentum turpis ac nibh tristique, a rutrum nisi convallis.
                    Proin eleifend felis lacus, in molestie leo fermentum vitae.
                    Sed id quam scelerisque, interdum libero id, tristique ex.
                    Quisque a odio blandit, maximus neque at, tristique diam.
                    Integer nec commodo lorem. Nam convallis risus dolor, non
                    tristique ante condimentum vel. Proin ut odio metus. Integer
                    aliquet lectus elit, ut consectetur nisl mollis eget.
                    Curabitur efficitur turpis at nulla viverra, eu aliquam elit
                    pulvinar. Nunc vitae ex mi. Sed tristique fringilla justo
                    vitae lacinia. Sed condimentum ullamcorper dignissim. Aenean
                    ligula arcu, convallis et dictum quis, faucibus vitae
                    libero. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Aliquam consequat risus quis enim laoreet, quis
                    pulvinar leo volutpat. In convallis dictum nisl, at
                    porttitor leo elementum at. Pellentesque a eleifend neque.
                    Donec sed ligula vitae lectus pharetra vestibulum. Etiam
                    vehicula, diam a vestibulum dignissim, libero massa dictum
                    neque, et pulvinar sem ex vel tellus. Proin a libero
                    sollicitudin, efficitur dolor eget, vestibulum neque. Proin
                    semper semper ligula. Aliquam erat volutpat. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          background: var(--main-bg-color);
          overflow: hidden;
        }

        button {
          font-size: 2rem;
          width: 300px;
          height: 4rem;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: none;
          border-radius: 2rem;
        }

        .text-container {
          cursor: none;
          color: white;
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 85vw;
        }

        .text-wrapper {
          width: 40vw;
        }
      `}</style>
    </>
  );
}
