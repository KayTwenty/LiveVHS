interface UserPageProps {
    params: {
        username: string;
    };
};

const UserPage = ({
    params
}: UserPageProps) => {
    return (
        <div className="flex justify-center items-center text-3xl">
            <div>
                You've clicked the user: {params.username}
            </div>
        </div>
    );
};
 
export default UserPage;
