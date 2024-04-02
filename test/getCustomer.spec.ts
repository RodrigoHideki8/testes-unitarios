import GetCustomer from "../src/getCustomer";

class MockCustomerRepository {
  findOne(): Promise<any> {
    return Promise.resolve({ id: 1, name: 'Mocked Data' });
  }
}

describe('GetCustomer', () => {
  it('should get data from CustomerRepository', async () => {
    const customerRepository = new MockCustomerRepository();
    const customer = new GetCustomer(customerRepository);

    const email = "rohsk10@gmail.com"
    const data = await customer.execute(email);

    expect(data).toEqual({ id: 1, name: 'Mocked Data' });
  });
});