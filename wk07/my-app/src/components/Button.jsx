import styles from "./Button.module.css";

import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  border: 1px solid black;

  &:hover {
    
  }
`;

// const Button = ({ onClick, children }) => {
//   return (
//     <button className={styles.btn} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

export default Button;
