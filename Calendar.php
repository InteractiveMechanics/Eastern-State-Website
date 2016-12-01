<?php
class Calendar {	
	public $settings;
	public $columns = 7;

	function __construct($settings) {
		$this->settings = $settings;

		$this->printHTML();
		$this->printCSS();
	}

	function printCSS() {
		?>
		<style>
			.calendar {
				color: #fff;
			}

			.calendar .darkGreen {
				background-color: rgb(81, 154, 81);
			}

			.calendar .lightGreen {
				background-color: rgb(159, 182, 74);
			}

			.calendar .yellow {
				background-color: rgb(230, 215, 55);
			}

			.calendar .orange {
				background-color: rgb(232, 149, 71);
			}

			.calendar .red {
				background-color: rgb(219, 50, 44);
			}

			.calendar table {
				width: 100%;
				table-layout:fixed;
			}

			.calendar td {
				padding: 7.02%;
				border: solid 1px transparent;
				background: rgb(59, 60, 65);
				position: relative;
				cursor: pointer;
			}

			.calendar td .price {
				position: absolute;
				bottom: 5px;
				right: 7px;
			}

			.calendar td .number {
				font-size: 24px;
			}

			.calendar td .dollars {
				font-size: 20px;
			}

			.calendar td .number,
			.calendar td .dollars {
				vertical-align: top;
			}

			.calendar .padding-td {
				background: none;	
				cursor: default;			
			}

			.calendar .not-colored {
				color: rgb(85, 85, 89);
			}

			.calendar td .day-number {
				position: absolute;
				text-align: center;
				top: 20px;
				left: 20px;
				font-size: 22px;
			}

			.calendar .month {
				position: relative;
			}

			.calendar .month-name {
				text-transform: uppercase;
				font-weight: bold;
				letter-spacing: 2px;
				position: absolute;
				left: 0;
			}

			.calendar .month-name.top {
				top: 0;
			}

			.calendar .month-name.bottom {
				top: 30px;
			}

			.calendar .days-name {
				width: 100%;
			}

			.calendar .days-name .day {
				width: calc(14.28% - 1.83px);
				padding: 10px 0;
				text-align: center;
				background-color: #000;
				float: left;
				margin: 1px;
				margin-bottom: 60px;
			}

			.calendar .days-name .day:first-child {
				margin-left: 0;
			}

			.calendar .days-name .day:last-child {
				margin-right: 0;
			}

			.calendar .colors-boxes .box {
				width: calc(20% - 4.8px);
				margin: 0 3px;
				float: left;
				text-align: center;
				margin-bottom: 30px;
			}

			.calendar .colors-boxes .box .top {
				padding: 15px;
			}

			.calendar .colors-boxes .box:first-child {
				margin-left: 0;
			}

			.calendar .colors-boxes .box:last-child {
				margin-right: 0;
			}

			.calendar .colors-boxes .box .number {
				font-size: 35px;
				font-weight: bold;
			}

			.calendar .colors-boxes .box .dollars {
				font-size: 24px;
				font-weight: bold;
			}

			.calendar .colors-boxes .box .number,
			.calendar .colors-boxes .box .dollars {
				vertical-align: top;
			}

			.calendar .colors-boxes .box .description {
				font-size: 12px;
			}

			.calendar .colors-boxes .box .when {
				border-top: solid 1px #fff;
				padding: 10px 0px;
				font-size: 11px;
			}

			@media (max-width: 767px) {
				.calendar td .day-number {
					font-size: 12px;
					top: 5px;
					left: 5px; 
				}

				.calendar td .price {
					bottom: 2px;
					right: 3px;
				}

				.calendar td .number {
					font-size: 15px;
				}

				.calendar td .dollars {
					font-size: 10px;
				}
			}
		</style>

		<script>
			$(document).ready(function() {
				setMonthNameTop();
				
				$(window).resize(function() {
					setMonthNameTop();
				});

				function setMonthNameTop() {
					$('.calendar .month-name').each(function() {
						var m = $(this);
						var top = parseInt($('.calendar td').outerHeight());

						if(m.hasClass('bottom')) {
							m.css('top', top - 25);
						}
						else {
							m.css('top', - 25);
						}
					})
				}
			});
		</script>
		<?php
	}

	function printHTML() {
		echo '<div class="calendar">';
			$this->printColorsBoxes();
			$this->printDaysName();
			$this->printCalendarTable();
		echo '</div>';
	}

	function printColorsBoxes() {
		echo '<div class="colors-boxes hidden-xs hidden-sm">';
		foreach($this->settings['colors'] as $key => $color) {
			?>
			<div class="box <?php echo $key; ?>">
				<div class="top">
					<div class="price">
						<span class="dollars">$</span>
						<span class="number"><?php echo $color[0]; ?></span>
					</div>
					<div class="description"><?php echo $color[1]; ?></div>
				</div>
				<div class="when"><?php echo $color[2]; ?></div>
			</div>
			<?php
		}
		echo '</div>';
	}

	function printDaysName() {
		?>
		<div class="days-name hidden-xs hidden-sm">
			<div class="day">Sunday</div>
			<div class="day">Monday</div>
			<div class="day">Tuesday</div>
			<div class="day">Wednesday</div>
			<div class="day">Thursday</div>
			<div class="day">Friday</div>
			<div class="day">Saturday</div>
			<div style="clear: both;"></div>
		</div>
		<?php
	}

	function printCalendarTable() {
		echo '<div class="calendar-table">';
			foreach($this->settings['months'] as $key => $month) {
				$month_number = date('n', strtotime($key));
				$jd = gregoriantojd($month_number, $month['range'][0], $this->settings['year']);
				$day_of_the_week = jddayofweek($jd, 0);

				$month_name_pos = 'top';
				if($day_of_the_week != 0) {
					$month_name_pos = 'bottom';
				}
				
				echo '<div class="month">';
					echo '<div class="month-name ' . $month_name_pos . '">' . $key . '</div>';

					echo '<table>';					
						echo '<tr>';
						// Add <td> for padding, if necessary
						if($day_of_the_week != 0) {
							for($i = 0; $i < $day_of_the_week; $i++) {
								echo '<td class="padding-td"></td>';
							}
						}

						// Print the "real" table
						for($j = $day_of_the_week, $i = $month['range'][0]; $i <= $month['range'][1]; $i++, $j++) {
							if($j % 7 == 0) {
								echo '</tr>';
								echo '<tr>';
							}

							$td_color = 'not-colored';
							foreach($month['colors'] as $color => $content) {
								if(in_array($i, $content)) {
									$td_color = $color;
									break;
								}
							}

							echo '<td class="' . $td_color . '">';
								echo '<span class="day-number">' . $i . '</span>';
								if($td_color != 'not-colored') {
									echo '<div class="price hidden-lg hidden-md">
										<span class="dollars">$</span>
										<span class="number">' . $this->settings['colors'][$td_color][0] .'</span>
									</div>';
								}								
							echo '</td>';							
						}
						echo '</tr>';
					echo '</table>';

				echo '</div>';
			}
		echo '</div>';
	}
}
?>