import styled from 'styled-components';


export const Container = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 62% 1fr;
  background-color:#0b131e;
`;

export const Data = styled.div`

  .meta-data {
    position: absolute;
    top: 325px;
    left: 250px;
    h2 {
      color: #35d8ac;
      font-size: 7rem;
      font-weight:600;
    }

    .location-name {
      font-size: 1rem;
      color: inherit;
      font-weight: 500;
      margin-left: 0.4rem;
    }
  }
`;

export const Inputbox = styled.section`
  margin-top:180px;
  border-radius:20px;
  background-color:#202b3b;
`;

export const Searchbox = styled.div`
  display: block;
  margin: 10px 20px 0 20px;

  .input {
    height: 50px;
    width:800px;
    border: none;
    border-radius: 10px;
    margin-left:-800px;
    margin-top:-100px;
    background-color:#202b3b;
    color:white;
    font-size:18px;
  }

  .input::-webkit-input-placeholder {
    padding-left: 6px;
  }

  .search-btn {
    width: 100px;
    height:50px;
    padding: 0.6rem;
    background-color: #202b3b;
    margin-left: 0.5rem;
    border-radius: 10px;
    border: none;
    color: #fff;
    cursor:pointer;
    font-size:18px;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
`;

export const Resultbox = styled.div`
  h1 {
    color: #fff;
    margin: 5px 20px;
    margin-top:-180px;
    margin-left:-900px;
    color:#D3D3D3;
  }
  ResultCard {
margin:0px;
padding:20px;
height:50px;
color:red;
  }
`;

export const FirstResult = styled.div`
margin-top:80px;
padding:10px;
`

export const Result = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  cursor: pointer;
  margin: 5px 20px;

  background-color: #0b131e;

  .result__name {
    color: #979cb0;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.64px;
    margin-left: 12px;
  }

  .result__value {
    color: #35d8ac;
    font-weight: 900;
    font-size: 18px;
    text-align: right;

    & > span {
      opacity: 0.8;
      font-weight: 600;
      font-size: 12px;
      margin-left: 3px;
    }
  }
`;

