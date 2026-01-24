interface AuthFooterProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthFooter = ({ isLogin, setIsLogin }: AuthFooterProps) => {
  return (
    <p className="text-center text-sm text-gray-600 mt-6">
      {isLogin ? "Don't have an account? " : "Already have an account? "}
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="text-blue-600 hover:text-blue-700 font-medium"
      >
        {isLogin ? "Sign up" : "Sign in"}
      </button>
    </p>
  );
};
