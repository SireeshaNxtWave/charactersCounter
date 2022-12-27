import {InputDetails} from './styledComponents'

const EachInputDetails = props => {
  const {details} = props
  const {input, length} = details

  return (
    <InputDetails>
      <p>
        {input} : {length}
      </p>
    </InputDetails>
  )
}

export default EachInputDetails
