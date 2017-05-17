Airplane.destroy_all

5.times do |airplane|
  row = 10
  columns = 20
  name = "Airplane\##{ airplane + 1 }"

  Airplane.create row: row, column: column, name: name

end

puts "Airplane Count #{Airplane.count}"
