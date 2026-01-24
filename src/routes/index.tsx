import { ListView } from "../components/index/list-view";
import { Header } from "../components/index/header";
import { Toolbar } from "../components/index/toolbar";

export const Index = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto p-8">
        <Header />
        <Toolbar />
        <div>
          <ListView />
        </div>
      </div>
    </div>
  );
};
