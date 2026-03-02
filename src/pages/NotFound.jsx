import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primaryBg min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-heading text-[9rem] leading-none text-gold/10 select-none">
          404
        </p>
        <div className="-mt-6">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Page Not Found
          </p>
          <h1 className="font-heading text-5xl text-[#2a2a2a] mb-6 leading-tight">
            This path leads nowhere.
          </h1>
          <p className="font-body text-sm text-softGrey leading-loose mb-10 max-w-sm mx-auto">
            The page you are looking for has moved, no longer exists, or the
            link may be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={() => navigate("/")}>
              Return Home
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/products")}>
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;