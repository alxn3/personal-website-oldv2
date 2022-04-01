import HighlightedText from 'components/highlighted-text';
import Section from 'layouts/section';

const About = () => {
  return (
    <Section header="About Me">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        sequi unde quidem quasi praesentium, eaque animi repudiandae nam modi
        ipsa! Soluta quas deleniti at autem, doloribus, voluptatibus, sit
        obcaecati sint architecto minima accusantium amet laborum laboriosam
        dolores animi sequi aspernatur rem voluptatum dolor suscipit velit. Esse
        velit <HighlightedText>voluptate</HighlightedText> veritatis. Delectus.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque
        explicabo mollitia animi culpa molestiae architecto, esse itaque dolores
        reprehenderit sint quasi temporibus qui. Illum deleniti aperiam
        accusantium rem reiciendis?
      </p>
    </Section>
  );
};

export default About;
