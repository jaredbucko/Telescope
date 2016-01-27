import csv
import rest

MAX_MAGNITUDE = 7

def get_star_data(key, row):
	star_data = {}
	for i in range(len(key)):
		star_data[key[i]] = row[i]
	return star_data


count = 0
with open('data/hygdata_v3.csv') as f:
	reader = csv.reader(f)
	key = next(reader)
	for row in reader:
		star_data = get_star_data(key, row)
		if float(star_data['mag']) <= MAX_MAGNITUDE:
			rest.post('/stars', star_data)
			count+=1

print('Star Count: {}'.format(count))