import {useParams} from 'react-router-dom';

function Blog() {
  const {namaBlog} = useParams()

  return (
    <h1>Ini {namaBlog}</h1>
  )
}

export default Blog