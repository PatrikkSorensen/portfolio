export default `class SalesServiceApiTest extends PHPUnit\Framework\TestCase
{
    public function testCreateSale()
    {
    }

    public function testTerminateSale()
    {
    }

    public function testUpdateSale()
    {
    }


    public function testGetSalesStatus()
    {
    }
       
    public function createServiceMock($method, $url, $expected, $response_body)
    {
        $guzzle = Mockery::mock(Client::class);
        $guzzle->shouldReceive($method)
            ->once()
            ->withArgs([$url, $expected])
            ->andReturn(new Response(200, ['Content-Type' => 'application/json'], json_encode($response_body)));

        return new NEGasServiceAPIMock($guzzle);
    }
}

class SalesServiceApiMock extends SalesServiceApi
{
    public function __construct(Client $client = null)
    {
        $this->client = $client;
    }
}
`