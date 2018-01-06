export default `public function testCreateSale()
{
    /** @var Sale $sale */
    $sale = factory(GasServiceDelivery::class)->create();

    $this->createServiceMock(
        'post',
        'createDelivery',
        [
            'json' => [
                'StartDate' => $sale->start_date,
                'ExternalId' =>  $sale->external_id,
            ]
        ],
        []
    )->createSale($sale);
}
`