import styled from 'styled-components'


export const CheckOutContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const NamePrice = styled.div`
  width: 23%;
`

export const Quality = styled.div` 
  width: 23%;
  display: flex;
  .value{
    margin: 10 50px;
  }
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const Value = styled.div`
  margin: 10 50px;
`

export const ButtonRemove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`