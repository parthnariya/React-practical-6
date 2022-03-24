import styled from 'styled-components'
export const ProfilePicture = styled.img`
  height: ${props => props.height};
  width: auto;
  border-radius: ${props => props.border};
  margin: 0.3rem;
  padding: 0.1rem;
`;