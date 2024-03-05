export default function EventRoom({ room }) {
	const statusText = {
		0: 'Available',
		1: 'Assigned',
		2: 'In Use',
		3: 'Needs Cleaning',
		4: 'Being Cleaned',
	}[room.status]

	return (
		<div style={{ backgroundColor: 'var(--color-bg-light)', width: '525px', height: '250px', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
			<h1>{room.name ? room.name : '(unknown room)'}</h1>
			<div style={{ display: 'flex', margin: '0.5rem' }} title="Party Name">
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
					<path d="M17.517 10.012c.151.23.087.541-.144.692l-2.2 1.444c-.085.056-.179.082-.274.082-.162 0-.322-.079-.418-.225-.152-.231-.087-.541.143-.692l2.201-1.445c.23-.151.541-.089.692.144m-6.242-2.595l1.111-2.385c.116-.252.414-.36.664-.243.25.117.36.413.242.664l-1.111 2.386c-.085.181-.265.288-.453.288l-.211-.047c-.25-.115-.359-.413-.242-.663m-2.624.613c1.377-2.652 1.484-5.104.318-7.286-.178-.333.066-.734.441-.734.177 0 .351.095.442.264 1.33 2.49 1.225 5.254-.314 8.217-.089.171-.263.269-.444.269-.078 0-.156-.018-.23-.056-.245-.127-.341-.429-.213-.674m15.349 5.526c0 .352-.351.588-.671.47-2.808-1.028-5.254-.821-7.271.611-.088.063-.189.093-.29.093-.155 0-.309-.073-.406-.21-.16-.224-.108-.537.117-.696 2.301-1.637 5.059-1.884 8.193-.737.203.074.328.266.328.469m-16.484-2.608l2.865 7.517-2.248.964-2.753-7.512.778-2.176 1.358 1.207zm3.785 7.124l-2.168-5.687 5.025 4.463-2.857 1.224zm-8.27.419l.989 2.699-2.307.989 1.318-3.688zm1.823-5.103l2.358 6.435-2.271.973-1.384-3.777 1.297-3.631zm-4.853 10.612l15.997-6.853-10.283-9.137-5.714 15.99zm20.46-15.629l.552-.694.281.841.831.309-.713.528-.038.886-.723-.516-.854.238.268-.846-.491-.739.887-.007zm-1.384.885l-.639 2.019 2.041-.568 1.724 1.23.089-2.115 1.704-1.258-1.985-.739-.672-2.008-1.315 1.658-2.118.017 1.171 1.764zm-2.167-4.194c.593-.044.924-.141 1.074-.315.176-.204.226-.647.165-1.433-.023-.276.183-.517.459-.539.277-.016.515.18.537.456.063.806.059 1.62-.402 2.156-.429.499-1.13.602-1.76.647-.702.052-.72.243-.774.878-.056.67-.152 1.744-1.84 1.933-1.017.115-1.433.33-1.377 1.956.008.275-.207.325-.484.325h-.016c-.269 0-.491-.022-.5-.291-.049-1.461.191-2.655 2.265-2.887.874-.099.9-.404.956-1.072.054-.635.145-1.7 1.697-1.814m5.264-3.048c.454 0 .823.37.823.824 0 .454-.369.823-.823.823-.454 0-.824-.369-.824-.823 0-.454.37-.824.824-.824m0 2.647c1.006 0 1.823-.817 1.823-1.823s-.817-1.823-1.823-1.823c-1.007 0-1.824.817-1.824 1.823s.817 1.823 1.824 1.823m-8.446-3.662c.552 0 1 .449 1 .999 0 .551-.448.999-1 .999s-1-.448-1-.999c0-.55.448-.999 1-.999m0 2.998c1.103 0 1.999-.896 1.999-1.999 0-1.103-.896-1.998-1.999-1.998-1.104 0-2 .895-2 1.998s.896 1.999 2 1.999" />
				</svg>
				<p style={{ fontFamily: 'Poppins', marginLeft: '1rem' }}>{room.currentOccupant ? room.currentOccupant.partyName : '(no party name)'}</p>
			</div>
			<div style={{ display: 'flex', margin: '0.5rem' }} title="Party Host Name">
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
					<path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" />
				</svg>
				<p style={{ fontFamily: 'Poppins', marginLeft: '1rem' }}>{room.currentOccupant ? room.currentOccupant.hostName : '(no host assigned)'}</p>
			</div>
			<div style={{ height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div
						style={{
							width: '20px',
							height: '20px',
							backgroundColor: '#49CC47',
							opacity: '0.2',
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div style={{ width: '10px', height: '10px', backgroundColor: '#07EA02', opacity: '0.8', borderRadius: '50%' }}></div>
					</div>
					<p style={{ marginLeft: '0.5rem', fontSize: '1.75rem', fontFamily: 'Poppins' }}>{statusText}</p>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
					<p style={{ fontSize: '1.25rem', fontFamily: 'Poppins', textAlign: 'end' }}>
						{room.status === 0
							? ''
							: room.status === 1
							? 'Starts at'
							: room.status === 2
							? 'Ends at'
							: room.status === 3
							? 'Due by'
							: room.status === 4
							? 'Done by'
							: ''}
					</p>
					<p style={{ fontSize: '2rem' }}>
						{room.status === 0
							? ''
							: room.status === 1
							? new Date(room.currentOccupant.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
							: room.status === 2
							? new Date(room.currentOccupant.endTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
							: room.status === 3
							? 'TODO'
							: room.status === 4
							? 'TODO'
							: ''}
					</p>
				</div>
			</div>
		</div>
	)
}
