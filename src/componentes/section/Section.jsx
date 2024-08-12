import React, { useState } from 'react';
import './Section.css';
import SUIZACULTURA1 from '../../assets/img/SCulture4.webp';
import SUIZACULTURA2 from '../../assets/img/SCulture1.jpg';
import SUIZACULTURA3 from '../../assets/img/SCulture2.jpg';
import SUIZACULTURA4 from '../../assets/img/SUIZACULTURA.jpg';
import SIDEBARADD from '../../assets/img/SideBarADD.png';

function Section() {
  const [translated, setTranslated] = useState(false);

  const translateText = () => {
    setTranslated(!translated);
  };

  const paragraphs = {
    es: [
      "Suiza es un país con una rica y diversa herencia cultural que refleja su historia, geografía y su posición en el cruce de varias tradiciones europeas. El país es conocido por su multiculturalismo, al ser hogar de cuatro idiomas oficiales: alemán, francés, italiano y romanche. Cada una de estas regiones lingüísticas aporta su propio conjunto de costumbres y tradiciones, creando una mezcla única que define la identidad suiza. En el este, el cantón de los Grisones es el corazón de la cultura romanche, mientras que en el sur, el Ticino ofrece un sabor mediterráneo con su influencia italiana. La región occidental de Suiza, predominantemente francófona, y la parte central y septentrional, donde se habla alemán, también muestran sus propias características culturales distintivas.",
      "La gastronomía suiza es una parte esencial de la identidad del país, destacándose por su gran variedad y calidad. Sus quesos, como el Gruyère y el Emmental, junto con el chocolate suizo, son famosos en todo el mundo. Platos tradicionales como la fondue y la raclette son especialmente apreciados durante el invierno. Cada región del país tiene sus propias especialidades: en la parte italiana, la polenta y el risotto son muy populares, mientras que en la zona francófona se pueden degustar exquisiteces como la quiche y la croûte au fromage. La cocina suiza no solo refleja las influencias de sus vecinos, sino que también incorpora ingredientes y técnicas locales, perfeccionados a lo largo de los siglos.",
      "La música y las artes también juegan un papel importante en la vida cultural suiza. Suiza ha producido numerosos compositores, artistas y escritores de renombre internacional. Festivales de música, como el Montreux Jazz Festival, atraen a artistas y visitantes de todo el mundo. En las artes visuales, Suiza alberga museos de clase mundial como el Kunsthaus de Zúrich y el Museo de Bellas Artes de Basilea. El patrimonio literario suizo incluye figuras prominentes como Hermann Hesse y Friedrich Dürrenmatt. Además, la arquitectura suiza, con sus chalets alpinos y modernos edificios innovadores, refleja la combinación de tradición y modernidad.",
      "Las tradiciones y festividades suizas son una parte vibrante de su cultura. El país celebra una amplia variedad de festivales que varían de región en región. El Carnaval de Basilea es famoso por sus desfiles y máscaras coloridas, mientras que el Fête de l’Escalade en Ginebra conmemora un evento histórico con desfiles y recreaciones. En las zonas alpinas, la transhumancia, el traslado del ganado a los pastos de montaña en verano, es una tradición que se celebra con desfiles y fiestas. Estas festividades, junto con el respeto por las tradiciones y la innovación constante, hacen de Suiza un país con una cultura rica y diversa que es tanto histórica como dinámica."
    ],
    en: [
      "Switzerland is a country with a rich and diverse cultural heritage that reflects its history, geography, and position at the crossroads of various European traditions. The country is known for its multiculturalism, being home to four official languages: German, French, Italian, and Romansh. Each of these linguistic regions brings its own set of customs and traditions, creating a unique blend that defines Swiss identity. In the east, the canton of Grisons is the heart of Romansh culture, while in the south, Ticino offers a Mediterranean flavor with its Italian influence. The western region of Switzerland, predominantly French-speaking, and the central and northern parts, where German is spoken, also showcase their own distinctive cultural characteristics.",
      "Swiss gastronomy is an essential part of the country's identity, standing out for its great variety and quality. Its cheeses, such as Gruyère and Emmental, along with Swiss chocolate, are famous worldwide. Traditional dishes like fondue and raclette are especially appreciated during winter. Each region of the country has its own specialties: in the Italian part, polenta and risotto are very popular, while in the French-speaking area, you can enjoy delicacies like quiche and croûte au fromage. Swiss cuisine not only reflects the influences of its neighbors but also incorporates local ingredients and techniques perfected over the centuries.",
      "Music and the arts also play an important role in Swiss cultural life. Switzerland has produced numerous internationally renowned composers, artists, and writers. Music festivals, such as the Montreux Jazz Festival, attract artists and visitors from all over the world. In the visual arts, Switzerland is home to world-class museums like the Kunsthaus Zürich and the Basel Museum of Fine Arts. Swiss literary heritage includes prominent figures such as Hermann Hesse and Friedrich Dürrenmatt. Additionally, Swiss architecture, with its alpine chalets and innovative modern buildings, reflects the combination of tradition and modernity.",
      "Swiss traditions and festivities are a vibrant part of its culture. The country celebrates a wide variety of festivals that vary from region to region. The Basel Carnival is famous for its colorful parades and masks, while the Fête de l'Escalade in Geneva commemorates a historical event with parades and reenactments. In the alpine regions, transhumance, the movement of livestock to mountain pastures in summer, is a tradition celebrated with parades and parties. These festivities, along with a respect for traditions and constant innovation, make Switzerland a country with a rich and diverse culture that is both historical and dynamic."
    ]
  };

  return (
    <>
      <h2 className='sectionTitle'>Cultura Suiza</h2>
      <section className='section'>
        <p className='sectionParrafo'>{translated ? paragraphs.en[0] : paragraphs.es[0]}</p>
        <p className='sectionParrafo1'>{translated ? paragraphs.en[1] : paragraphs.es[1]}</p>
        <p className='sectionParrafo2'>{translated ? paragraphs.en[2] : paragraphs.es[2]}</p>
        <p className='sectionParrafo3'>{translated ? paragraphs.en[3] : paragraphs.es[3]}</p>
        <img className='SectionImagenSuiza GridImg1' src={SUIZACULTURA1} alt="" />
        <img className='SectionImagenSuiza GridImg2' src={SUIZACULTURA2} alt="" />
        <img className='SectionImagenSuiza GridImg3' src={SUIZACULTURA3} alt="" />
        <img className='SectionImagenSuiza GridImg4' src={SUIZACULTURA4} alt="" />
        <img className='SideBarADD' src={SIDEBARADD} alt="" />
        <button onClick={translateText} className='translateButton'>
          {translated ? 'Mostrar en Español' : 'Translate to English'}
        </button>

    
      </section>
    </>
  );
}

export default Section;
