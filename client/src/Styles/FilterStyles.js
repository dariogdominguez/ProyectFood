import styled from "styled-components";


export const StyFilterDiv = styled.div`
height: 70px;
width: 100%;
border-radius: 15px;
display: flex;
padding: 10px;
`

export const InputImage = styled.input`
cursor: pointer;
border-radius: 30%;
font-size: 1.5em;
border: 1px solid black;
margin: 3px;
padding:10px;
height: 20px;
width: 20px;
`;

export const RadioInputWrapper = styled.div`
  font-size: 1.0625rem;
  font-family: sans-serif;
  label {
    display: inline-block;
    background-color: #e8eeef;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border-radius: 4px;
    margin: 20px;
  }
  label:hover {
    background-color: #f4f7f8;
  }
  input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  input:checked + label {
    background: palevioletred;
  }
`;