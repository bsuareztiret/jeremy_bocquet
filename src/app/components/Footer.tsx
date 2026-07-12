export function Footer() {
  return (
    <footer className="footer">
      <div className="main__wrap">
        <div className="footer-about">
          <p>
            Artiste et créateur sonore explorant les interstices entre le son et
            l’espace. Mon travail explore la relation et les dynamiques sensible
            du sonore.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <a href="https://www.instagram.com/cornilmusic/">Instagram</a>
            <a href="https://pixelfed.social/Cornil">Pixelfed</a>
            <a href="jeremy.boc@pm.me">Email</a>
            <a href="/Jeremy-bocquet_Portfolio_2026.pdf" download>
              Portfolio
            </a>
            {/*<a href="/files/cv.pdf" download>
              CV
            </a>*/}
          </div>

          <div className="footer-col">
            <h3>Design</h3>
            <p>
              Fait avec amour par{" "}
              <a href="https://www.instagram.com/ticosmucus/">Beny</a>
            </p>
          </div>

          <div className="footer-col">
            <h3>Hosting</h3>
            <p>
              <a href="https://www.levv.io/">Levv</a> is reimagining cloud
              computing for a sustainable future.
            </p>
          </div>

          <div className="footer-col">
            <h3>Typography</h3>
            <a href="https://genderfluid.space/">BBB</a>
            <a href="https://www.instagram.com/butchaoreilles">
              @butchaoreilles
            </a>
            <a href="https://www.instagram.com/valoulaflute/">@valoulaflute</a>
            <a href="https://www.instagram.com/lena_slbrt">@lena_slbrt</a>
            <a href="mailto:salabert.lena@gmail.com">lena_slbrt@.com</a>
          </div>

          <div className="footer-col">
            <h3>Lisence</h3>
            <p>CC BY-NC</p>
            {/*La licence CC BY-NC (Attribution - Pas d’Utilisation Commerciale) autorise le partage et la modification d’une œuvre à condition de créditer l'auteur initial, mais interdit strictement toute exploitation à but lucratif.Les règles à respecter :Attribution (BY) : Vous devez obligatoirement citer le nom de l'auteur, mentionner la licence utilisée et indiquer si des modifications ont été apportées.Non-Commercial (NC) : L’œuvre, ou les créations qui en découlent, ne peuvent pas être utilisées dans le but d'obtenir un avantage financier ou une compensation commerciale.Ce qui est autorisé :Copier et distribuer : Partager l'œuvre sous tous formats.Adapter : Modifier, remixer et créer de nouvelles œuvres à partir du document original.*/}
          </div>

          <div className="footer-col">
            <h3>Friends</h3>
            <a href="https://www.oceane-eliard.com/">Océane Eliard : </a>
            <a href="https://alikichristoforou.com/">Aliki Christoforou</a>
            <a href="#">Comité informel</a>
            <a href="#">Juanita Onzaga</a>
            <a href="https://www.reikibeny.be/">Beny Suarez-Piedra</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Jérémy Bocquet</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
