import styled from '@emotion/styled'

export default function Button({backgroundColor, title}) {

    const Mybutton = styled.button`
    padding: 10px;
    background-color: ${backgroundColor};
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px
    width: 30px;
    `

  return (
    <Mybutton>{title}</Mybutton>
  )
}
