class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ForgotPasswordApp() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate sending reset email
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-color)] flex flex-col">
      <Header />

      <div className="flex items-center justify-center flex-grow py-16">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Forgot Password</h1>
              <p className="text-[var(--text-secondary)]">Enter your email to reset your password</p>
            </div>

            {submitted ? (
              <div className="text-center text-green-600 font-semibold">
                <p>Reset instructions have been sent to your email.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary mt-4"
                >
                  Send Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                  {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Reset Link
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <a href="login.html" className="text-[var(--primary-color)] hover:underline text-sm">
                Back to Sign In
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ForgotPasswordApp />
  </ErrorBoundary>
);
