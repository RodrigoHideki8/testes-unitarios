interface CustomerRepository {
    findOne(options: any): Promise<any>;
}

export default class GetCustomer {
    private customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute(email: string): Promise<any> {
        try {
            return await this.customerRepository.findOne({
                where: {
                    email: email
                }
            });
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
            throw error; 
        }
    }
}