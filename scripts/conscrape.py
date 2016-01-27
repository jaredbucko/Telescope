import csv
import rest


def get_con_data(key, row):
	con_data = {}
	for i in range(len(key)):
		con_data[key[i]] = row[i]
	return con_data


count = 0
with open('data/constellation_names.csv') as f:
	reader = csv.reader(f)
	key = next(reader)
	for row in reader:
		con_data = get_con_data(key, row)
		print(con_data)
		rest.post('/constellations', con_data)
		count+=1

print('Constellation Count: {}'.format(count))