import axios from "axios";

const AwsService = {
    get: async (url: string): Promise<any> => {
        try{ 
            await axios.get(url);
        } catch (error) {
            console.log(error);
        }
    }
};

export default AwsService;