import styled from 'styled-components';

const LoadingSpinner = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.contrastText}; /* Light grey */
  border-top: 16px solid ${({ theme }) => theme.colors.primary}; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default function Loading() {
  return (
    <div>
      <LoadingSpinner />
    </div>
  );
}
