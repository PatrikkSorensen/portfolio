export default `class SalesServiceApi
{
    protected $client;

    public function __construct($base_uri)
    {
        $this->client = new Client([
            'headers' => [
                'cache-control' => 'no-cache',
                'content-type' => 'application/json',
            ],
            'base_uri' => $base_uri,
        ]);
    }

    public function createDelivery(Sale $sale)
    {
    }

    public function updateSale(Sale $sale)
    {
    }

    public function deleteSale(Sale $sale, \Carbon $end_date)
    {
    }

    public function RetrieveSalesStatus(Sale $sale)
    {
    }
}
`