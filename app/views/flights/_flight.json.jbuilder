json.extract! flight, :id, :fligh_number, :origin, :destination, :date, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
json.airplane flight.airplane
# json.reservations flight.reservations
