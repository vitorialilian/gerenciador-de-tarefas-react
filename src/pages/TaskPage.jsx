import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
const navigate = useNavigate();

const [searchParams] = useSearchParams();

const title = searchParams.get("title");
const description = searchParams.get("description");

return (
    <div className="w-screen h-screen bg-fuchsia-800 p-6 flex justify-center">
        <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative mb-6">
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-fuchsia-100 bg-fuchsia-500 px-4 py-2 rounded-md font-medium">
                    <ChevronLeftIcon />
                </button>

                <Title>Detalhes da Tarefa</Title>
            </div>

            <div className="bg-fuchsia-200 p-4 rounded-md">
                <h1 className="text-xl text-fuchsia-600 font-bold">{title}</h1>
                <p className="text-fuchsia-600">{description}</p>
            </div>
        </div>
    </div>
    )
}

export default TaskPage;