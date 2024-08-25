import { Div, Title, Subtitle } from "./style";
import Profile
 from "./Profile";
export default function Card() {
  return (<>
        <Div>
          <Title>Hello World!!!</Title>
        </Div>
        
        <Div>
          <Profile></Profile>
          <Title>Hello World!!!</Title>
          <Subtitle>oii</Subtitle>
        </Div>
    </>
  );
}