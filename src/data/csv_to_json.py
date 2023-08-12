import csv
import json

csv_file_path = 'src/data/Data.csv'
json_file_path = 'src/data/Data.json'

data = []

# Read CSV and convert to JSON format
with open(csv_file_path, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append(row)

# Write JSON data to output file
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file, indent=4)

print('CSV to JSON conversion completed.')
