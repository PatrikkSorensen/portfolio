export default `public function createDelivery(Sale $sale)
{
    $this->client->post(
        'createDelivery',
        [
            'json' => [
                'StartDate' => $sale->start_date,
                'ExternalId' => $sale->external_id,
            ]
        ]
    )

    $sale->save();
}
`