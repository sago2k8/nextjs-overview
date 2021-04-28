import { useRouter } from 'next/router'; 
import {getByCity} from '../../data/getters';
export default ({ coworkName='not found' }) => {
  const router = useRouter();

  return <div>
    <h1>
      {router.query.country}
    </h1>

    <p>
      {coworkName}
    </p>
  </div>
}

export const getServerSideProps = async (context) => {
  console.log(context.query);
  const cowork = getByCity(context.query.country);
  return {
    props: {
      coworkName: cowork ? cowork.name : null,
    }
  }
}