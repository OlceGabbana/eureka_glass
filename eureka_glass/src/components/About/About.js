import './About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Eureka Glass</h2>
        <ul>
          <li>Проектирование, изготовление и установка</li>
          <li>Европейское стекло и комплектующие</li>
          <li>Срок службы нашего стекла - 50 лет</li>
          <li>Гарантия качества и сервисное обслуживание</li>
        </ul>
        <a href="#feedback">Оставить заявку</a>
      </div>
    </section>
  )
}

export default About;