import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return(
      <div className='h-screen w-full'>
        <h1>Something went wrong.</h1> 
      </div>
    )
  };
    return this.props.children;
  }
}

export default ErrorBoundary;
